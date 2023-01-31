/**
 * Enterprise page
 */

import { UserProfile, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Layout from "@/components/Layout";
import clientPromise from '../../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import { WithId } from "mongodb";


interface Enterprises extends WithId<Document>{
  name: string
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise
    const db = client.db("maindb");

    const enterprises = await db
      .collection("enterprises")
      .find({}, { projection: { _id: 1, name: 1 } })
      .limit(10)
      .toArray()

    return {
      props: {
        isConnected: true,
        enterprises: JSON.parse(JSON.stringify(enterprises)),
      },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

interface Prop extends InferGetServerSidePropsType<typeof getServerSideProps> {
  user?: UserProfile
  isLoading?: boolean
  isConnected: boolean
  enterprises: Enterprises[]
}

export default withPageAuthRequired(({ isConnected, enterprises }: Prop) => {
  return (
    <Layout>
      <div>
        {
          isConnected ? (
            <div>
              {enterprises.map((e) => (
                <ul>
                  <li>{e._id.toString()}</li>
                  <li>{e.name.toString()}</li>
                </ul>
              ))}
            </div>
          ) : (
            <p>Boo!</p>
          )
        }
      </div>
    </Layout>
  )
})
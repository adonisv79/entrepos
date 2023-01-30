/**
 * Enterprise page
 */

import { UserProfile, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Layout from "@/components/Layout";
import clientPromise from '../../lib/mongodb'
import { InferGetServerSidePropsType } from 'next'
import { WithId } from "mongodb";

interface Prop extends InferGetServerSidePropsType<typeof getServerSideProps> {
    user?: UserProfile
    isLoading?: boolean
    isConnected: boolean
    enterprises: WithId<Document>[]
}

export async function getServerSideProps(context) {
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

export default withPageAuthRequired(({ user, isLoading, isConnected, enterprises }: Prop) => {
    return (
        <Layout user={user} isLoading={isLoading}>
            <div>sa
                {
                    isConnected ? (
                        <div>
                            {enterprises.map((e) => (
                                <ul>
                                    <li>{e._id}</li>
                                    <li>{e.name}</li>
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
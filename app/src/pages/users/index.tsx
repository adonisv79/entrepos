import { UserProfile } from '@auth0/nextjs-auth0/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/Layout'
import List from '../../components/List'

const sampleUserData: [UserProfile] = [
  {
    id: 1,
    name: 'Adonis V'
  }
]

type Props = {
  items: UserProfile[]
}

const WithStaticProps = ({ items }: Props) => {
  return  (
    <Layout>
      <Head>
        <title>EntrePOS - Userlist</title>
        <meta property="og:title" content="sads" key="title" />
      </Head>
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /users</p>
      <List items={items} />
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: UserProfile[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
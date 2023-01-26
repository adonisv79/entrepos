import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { User } from '../../interfaces'
import Layout from '../../components/Layout'
import List from '../../components/List'

const sampleUserData: [User] = [
    {
      id: 1,
      name: 'Adonis V'
    }
  ]

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => (
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

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
import { useUser } from '@auth0/nextjs-auth0/client'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => {
  const { user, isLoading } = useUser()
  
  return (
    <Layout user={user} loading={isLoading}>
      <Head>
        <title>EntrePOS - About us</title>
        <meta property="og:title" content="sads" key="title" />
      </Head>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { UserProfile } from '@auth0/nextjs-auth0/client'
import Head from 'next/head'
import Layout from '../../components/Layout'

type ProfileProps = {
  user: UserProfile
}

export default function Profile({ user }: ProfileProps) {
  return (
    <Layout user={user}>
      <Head>
        <title>EntrePOS - SSR sample</title>
        <meta property="og:title" content="sads" key="title" />
      </Head>
      <h1>Profile</h1>

      <div>
        <h3>Profile (server rendered)</h3>
        <img src={user.picture?.toString()} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </Layout>
  )
}

// Protected route, checking authentication status before rendering the page.(SSR)
// It's slower than a static page with client side authentication
export const getServerSideProps = withPageAuthRequired()
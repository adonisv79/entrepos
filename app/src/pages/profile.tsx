import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Head from 'next/head'
import Layout from '../components/Layout'

type ProfileCardProps = {
  user: UserProfile
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <>
      <h1>Profile</h1>
      <div>
        <h3>Profile (client rendered)</h3>
        <img src={user?.picture} alt="user picture" />
        <p>Given Name: {user.given_name}</p>
        <p>Family Name: {user.family_name}</p>
        <p>Nickname: {user.nickname}</p>
        <p>Name: {user.name}</p>
        <p>Locale: {user.locale}</p>
        <p>Updated at: {user.updated_at}</p>
        <p>email: {user.email}</p>
        <p>email is verified: {user.email_verified?.toString()}</p>
        <p>sub: {user.sub}</p>
        <p>session id: {user.sid}</p>
        <p>{JSON.stringify(user)}</p>
      </div>
    </>
  )
}

// Protected route, checking user authentication client-side.(CSR)
export default withPageAuthRequired(({ user, isLoading }) => {
  return (
    <Layout>
      <Head>
        <title>EntrePOS - Profile</title>
        <meta property="og:title" content="sads" key="title" />
      </Head>
      {!isLoading && <ProfileCard user={user} />}
    </Layout>
  )
})

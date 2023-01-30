import { UserProfile, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Head from 'next/head'
import { json } from 'stream/consumers'
import Layout from '../components/Layout'

type ProfileCardProps = {
  user: UserProfile
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  
  const item = localStorage.getItem('key')
  return (
    <>
      <Head>
        <title>EntrePOS - Profile</title>
        <meta property="og:title" content="sads" key="title" />
      </Head>
      <h1>Profile</h1>
      <div>
        <p>{item}</p>
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

const Profile = ({ user, isLoading }) => {
  return (
    <Layout user={user} loading={isLoading}>
      <div>{typeof isLoading}</div>
      {isLoading ? <>Loading...</> : <ProfileCard user={user} />}
    </Layout>
  )
}

// Protected route, checking user authentication client-side.(CSR)
export default withPageAuthRequired(Profile)

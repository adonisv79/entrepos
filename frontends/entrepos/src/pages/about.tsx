import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage = () => {
  const { user, isLoading } = useUser()
  
  return (
    <Layout title="EntrePOS - About Us" user={user} loading={isLoading}>
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">Go home</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
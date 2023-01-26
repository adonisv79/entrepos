import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'
import Head from 'next/head'
import Button from '@mui/material/Button';
import Layout from '../components/Layout'

const PAGE_TITLE = 'EntrePOS - Home'

export default () => {
  const { user, isLoading } = useUser()

  return (
    <Layout user={user} loading={isLoading}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta property="og:title" content={PAGE_TITLE} key="title" />
      </Head>
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">About</Link>
        <Button variant="contained">Hello World</Button>
        <select>
          <option>s</option>
          <option>2</option>
        </select>
        <input type="text" />
        <input type="color" />
        <input type="checkbox" />
        <input type="date" />
        <input type="email" />
        <input type="file" />
      </p>
    </Layout>
  )
}
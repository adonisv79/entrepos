import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout title="EntrePOS - Home">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

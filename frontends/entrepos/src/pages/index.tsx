import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
  <Layout title="EntrePOS - Home">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
      <button>CLICK</button>
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

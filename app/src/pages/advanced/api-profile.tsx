import { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../../components/Layout'

const ApiProfile = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api/protected-api')

      const data = await res.json()
      setData(data)
    })()
  }, [])

  return (
    <Layout>
      <Head>
        <title>EntrePOS - CSR Sample</title>
        <meta property="og:title" content="sads" key="title" />
      </Head>
      <h1>Profile</h1>

      <div>
        <h3>Public page (client rendered)</h3>
        <p>We are fetching data on the client-side :</p>
        <p>By making request to '/api/protected-api' serverless function</p>
        <p>so without a valid session cookie will fail</p>
        <p>{JSON.stringify(data)}</p>
      </div>
    </Layout>
  )
}

// Public route.(CSR) also accessing API from the client-side.
// data is not cached when redirecting between pages.
export default ApiProfile
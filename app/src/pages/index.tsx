import { useUser } from '@auth0/nextjs-auth0/client'
import { useState } from "react"
import Head from 'next/head'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout'

const PAGE_TITLE = 'EntrePOS - Home'

export default () => {
  const { user, isLoading } = useUser()
  const [score, setScore] = useState(231);
  const increaseScore = () => setScore(score + 1);
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.setItem('key', 'asd')
  }
  return (
    <Layout user={user} loading={isLoading}>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta property="og:title" content={PAGE_TITLE} key="title" />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div id="home-intro">
            <h1>Welcome to EntrePOS👋!</h1>
            <p>Your score is {score}</p>
            <button onClick={increaseScore}>+</button>
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
}
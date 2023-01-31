import Head from 'next/head'
import Grid from '@mui/material/Grid';
import Layout from '../components/Layout'

const PAGE_TITLE = 'EntrePOS - Home'

export default () => {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta property="og:title" content={PAGE_TITLE} key="title" />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div id="home-intro">
            <h1>Welcome to EntrePOS👋!</h1>
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
}
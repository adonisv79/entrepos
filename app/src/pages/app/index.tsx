import { getSession, updateSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { handleUserSession } from "@/lib/db/users";
import { getEnterpriseUsers } from "@/lib/db/enterprises";
import logger from "@/lib/logger";
import { Button, Grid } from "@mui/material";
import Layout from "@/components/Layout";
import Head from "next/head";
import RegisterNewEnterprise from "@/components/Enterprise/RegisterNewEnterprise";

const PAGE_TITLE = 'EntrePOS - DASHBOARD'
interface AppProps {
  profile_id: string
  error?: string
  currentEnterprise?: string
  enterprises: []
}

const MainBody = ({ error, currentEnterprise }: AppProps) => (
  <>
    {
      error ?
        <h1>{error}</h1>
        : currentEnterprise ?
          <ul><li>d</li></ul>
          : <RegisterNewEnterprise />
    }
  </>
)

export default function App(ctx: any) {
  return (
    <Layout>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta property="og:title" content={PAGE_TITLE} key="title" />
      </Head>
      <Grid container>
        <Grid item xs={12}>
          {MainBody(ctx)}
        </Grid>
      </Grid>
    </Layout>
  )
  // return <>{profile_id}</>
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    const props: any = {}
    try {
      // check if the user session exists in db and get the user_profile id
      const sess = await getSession(req, res)
      if (!sess) throw new Error('No session found');
      // if the user is not synced yet with the database
      if (!sess.user.isDBSynced) {
        sess.user.id = await handleUserSession(JSON.parse(JSON.stringify(sess.user)))
        sess.user.isDBSynced = true
        await updateSession(req, res, sess)
      }
      props.profile_id = sess.user.id
      // check if the user is using a specific enterprise
      // if none then provide them with a list
      // if a list does not exist then ask them to create one 
      if (!sess.app?.currentEnterprise) {
        props.enterprises = await getEnterpriseUsers(sess.user.id, sess.user.sid)
      } else {
        props.currentEnterprise = sess.app?.currentEnterprise
      }
    } catch (err) {
      if (err instanceof Error) {
        logger.error(err.message)
        props.error = err.message
      }
    }
    return { props }
  }
})
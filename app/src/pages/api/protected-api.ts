import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0'

// Serverless function
// Protected API, requests to '/api/protected' without a valid session cookie will fail

async function handle(req: any, res: any) {
  const sess = await getSession(req, res)

  try {
    // we simulate a delayed response
    setTimeout(() => {

      res.status(200).json({
        session: 'true',
        id: sess?.user?.sub,
        nickname: sess?.user?.nickname,
      })
    },2000)
  } catch (e) {
    res.status(500).json({ error: 'Unable to fetch', description: e })
  }
}

export default withApiAuthRequired(handle)
import { getSession, updateSession, handleAuth, handleCallback } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

export default handleAuth({
    callback: async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            const session = await getSession(req, res)
            console.log('aaaaaa2')
            if (session?.user) {
                session.user.new = {
                    bb: 'sad',
                    cc: 'sadasdasd'
                }
                await updateSession(req, res, session)
            }

            console.log('aaaaaa3')
            await handleCallback(req, res)

            console.log('aaaaaa4')
        } catch (ex) {
            res.status(500).send('Error on login. Please contact admin')
        }
    }
})
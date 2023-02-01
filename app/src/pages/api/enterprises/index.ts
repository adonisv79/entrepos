import { getSession, updateSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../../lib/db/mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const sess = await getSession(req, res)
        // if(sess?.user) {
        //     sess.user.new = {
        //         bb: 'sad',
        //         cc: 'sadasdasd'
        //     }
        //     updateSession(req, res, sess)
        // }
        const client = await clientPromise
        const db = client.db("maindb");

        const enterprises = await db
            .collection("enterprises")
            .find({}, { projection: { _id: 1, name: 1 } })
            .limit(10)
            .toArray()
        console.dir(sess?.user.new)
        res.status(200).json({ enterprises, sess })
    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default withApiAuthRequired(handler)
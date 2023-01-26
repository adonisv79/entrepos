import { NextApiRequest, NextApiResponse } from 'next'

const sampleUserData = [
    {
        id: 1,
        name: 'Adonis V'
    }
]

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (!Array.isArray(sampleUserData)) {
            throw new Error('Cannot find user data')
        }

        res.status(200).json(sampleUserData)
    } catch (err: any) {
        res.status(500).json({ statusCode: 500, message: err.message })
    }
}

export default handler
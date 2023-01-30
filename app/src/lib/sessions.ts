import clientPromise from './mongodb'

export async function getUserSession(sid: String) {
    const client = await clientPromise
        const db = client.db("maindb");

        const session = await db
            .collection("user_sessions")
            .findOne({ sid })
        
        return session
}

export async function setUserSession(session_data: Object) {
    const client = await clientPromise
        const db = client.db("maindb");

        const result = await db
            .collection("user_sessions")
            .insertOne(session_data)
        
        return result.acknowledged
}
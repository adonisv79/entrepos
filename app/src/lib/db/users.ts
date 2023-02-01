import useDB from './mongodb'
import logger from '../logger';

/**
 * Handles the provisioning and retrieving of the User to procure the profile id.
 * 1. If the user does not exists in the 'user_profiles' database, create it
 * 2. If the user already exists use the existing record
 * @param user - this is technically the Auth0 session.user object
 * @returns the UserProfile's mongodb ID
 */
export async function handleUserSession(user: any) {
    try {
        logger.info('handleUserSession called', { sub: user.sub, sid: user.sid })
        const db = await useDB('maindb')
        let profile_id: String

        const profile = await db
            .collection("user_profiles")
            .findOne({ sub: user.sub })

        if (!profile) {
            logger.debug('profile does not exist in db, creating new record', { sid: user.sid })
            const result = await db
                .collection("user_profiles")
                .insertOne(user)
            profile_id = result?.insertedId.toHexString()
            logger.debug('profile created!', { sid: user.sid, profile_id })
        } else {
            profile_id = profile._id.toHexString()
            logger.debug('profile already exists! reusing...', { sid: user.sid, profile_id })
        }
        logger.info('handleUserSession completed', { sid: user.sid })
        return profile_id
    } catch (err) {
        if (err instanceof Error) logger.error(err.message, { sid: user.sid })
        throw new Error('handleUserSession call failed')
    }
}
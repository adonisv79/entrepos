import useDB from './mongodb'
import logger from '../logger';

/**
 * Retireves a list of enterprises that the user belongs to
 * @param upid - The user profile id
 * @param sid - The session id
 * @returns 
 */
export async function getEnterpriseUsers(upid: string, sid: string) {
    try {
        logger.info('getEnterpriseUsers called', { upid, sid })
        const db = await useDB('maindb')

        const enterprises = await db
            .collection("enterprise_users")
            .find({ upid })
            .toArray()

        logger.info('getEnterpriseUsers call completed', { upid, sid, enterprises })
        return enterprises
    } catch (err) {
        if (err instanceof Error) logger.error(err.message, { sid, upid })
        throw new Error('getEnterpriseUsers call failed')
    }
}
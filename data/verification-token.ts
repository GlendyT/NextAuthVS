import {db} from "@/lib/db"

export const getVerificationTokenByToken = async (
    token: string
) => {
    try {
        const verificationToken = await db.verificationToken.findUnique({
            where: {token}
        })
    } catch (error) {
        return null;
    }
}

export const getVerificationTokenByEmail = async (
    email: string
) => {
    try {
        const verificationToken = await db.verificationToken.findFirst({
            where: {email}
        })
    } catch (error) {
        return null;
    }
}
import { UserI } from "../interface/data"
import { dataURL } from "./general"

export const getUsers = async () => {
    try {
        const users = await fetch(`${dataURL}/users`)
        if (!users.ok) {
            throw new Error('Failed to fetch users')
        }
        const userData = await users.json() as UserI[]
        return userData
    } catch (e) {
        console.error('Error fetching users:', e)
        throw e
    }
}

export const getUserById = async (userId: string) => {
    try {
        const user = await fetch(`${dataURL}/users/${userId}`)
        if (!user.ok) {
            throw new Error('Failed to fetch user')
        }
        const userData = await user.json() as UserI
        return userData
    } catch (e) {
        console.error(`Error fetching user with ID ${userId}:`, e)
        throw e
    }
}
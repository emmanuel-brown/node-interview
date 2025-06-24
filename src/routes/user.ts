import express, { Response, Request } from 'express'
import { getUserById, getUsers } from '../constants/requests'
import { auth } from '../middleware/auth'
const userR = express.Router()

/*
    get user details
*/
userR.get(
'/profile',
auth,
async (req: Request<{}, {}, {}>, res: Response) => {
    try {
        if (!req.user) {
            res.status(401).send({ error: 'User not authenticated' })
            return
        }
        
        res.status(200).send(req.user)
    } catch(e) {
        res.status(400).send(e)
    }
})

/*
    Login
*/
userR.post(
'/login',
async (req: Request<{}, {}, {firstName: string, lastName: string}>, res: Response) => {
    try {
        const users = await getUsers()
        const { firstName, lastName } = req.body

        const userFound = users.find((u: any) => u.name === `${firstName} ${lastName}`)
        if (!userFound) {
            res.status(404).json({ message: 'login failed' })
            return
        }

        // just imagine that I doing some encrytion here
        const token = `${firstName} ${lastName}`.split('').reverse().join('')

        res.status(200).send({ token })
    } catch(e) {
        res.status(400).send(e)
    }
})

/*
    get users
*/
userR.get(
'/:userId',
auth, 
async (req: Request<{ userId: string }, {}, {}>, res: Response) => {
    try {
        const userData = await getUserById(req.params.userId)
        if (!userData) {
            res.status(404).json({ message: 'User not found' })
            return
        }
        if (req.user && req.user.id !== userData.id) {
            res.status(403).json({ message: 'Access denied' })
            return
        }
        
        res.status(200).send(userData)
    } catch(e) {
        res.status(400).send(e)
    }
})
    




export default userR
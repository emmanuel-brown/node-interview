import { NextFunction, Request, Response } from "express"
import { getUsers } from "../constants/requests"
import { UserI } from "../interface/data"

declare module 'express-serve-static-core' {
    interface Request {
        user?: UserI;
    }
}
    
export const auth: any = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const authFromHeader = req.header('Authorization')
        if(!authFromHeader) throw "missing headers"

        const token = authFromHeader.replace('Bearer ', '')
        if(!token) throw "missing token"
        const users = await getUsers()
        
        const name = token.split('').reverse().join('')
        
        const user = users.find(u => u.name === name)
        if(!user) throw "user not found"
        console.log(user)

        req.user = user

        next()
    } catch (e) {
        console.log(e)
        res.status(401).send({error: "Please authenticate perfectly"})
    }
}
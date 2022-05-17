import db from '../../db/mongoDB.js'
import express from 'express'

export default function makeChangeLogRoutes({authMiddleware})
{
    const router = express.Router();

    router.get('/header', authMiddleware.auth(), (req,res) => {
        (async (req,res) => {let data = await db.getCollection("users").find({"linearId":req.auth.linearId})
        return res.json({"header": data[0].changelogHeader})})(req,res)
    })

    router.put('/header', authMiddleware.auth(), (req,res) => {
        (async (req,res) => {await db.getCollection("users").updateOne({"linearId":req.auth.linearId}, {$set:{"changelogHeader":req.body.header}})
        res.json({})})(req,res)
    })

    return router;
}
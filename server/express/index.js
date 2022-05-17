import express from 'express'

import connectDB from '../db/connectDB.js'

import makeCallback from './express-callback.js'
import makeAuthMiddleware from './middleware/auth-middleware.js'
import makeAuthRoutes from './routes/auth-routes.js'
import makeUserRoutes from './routes/user-routes.js'
import makeChangeLogEntries from './routes/entry-routes.js'
import makeChangeLogRoutes from './routes/changelog-routes.js'

import makeLinearRoutes from './routes/linear-routes.js'

import { authManager } from '../auth/index.js'


export default function makeServer({config = null, indexPath = ''} = {})
{
    connectDB()

    const app = express()
    const port = config.getPort() || 5000

    const authMiddleware = makeAuthMiddleware(authManager)

    app.use(express.json())


    app.use("/api/linear", makeLinearRoutes({makeCallback, authMiddleware}))
    app.use("/api/auth", makeAuthRoutes({makeCallback}))
    app.use("/api/users", makeUserRoutes({authMiddleware, makeCallback}))
    app.use("/api/changelog-entries", makeChangeLogEntries({authMiddleware, makeCallback}))
    app.use("/api/changelog", makeChangeLogRoutes({authMiddleware}))
    


    // Serve static asset in production
    if (process.env.NODE_ENV === 'production') {
        // Set static folder
        app.use(express.static('client/build'))
    
        app.get('*', (req, res) => {
        res.sendFile(indexPath)
        res.set('Content-Security-Policy', "default-src 'self'","font-src 'self'","img-src 'self'", "script-src 'self'","style-src 'self'", "frame-src 'self'")
        })
    }

    app.listen(port, () => console.log("Server started on port "+port))

    return app
}
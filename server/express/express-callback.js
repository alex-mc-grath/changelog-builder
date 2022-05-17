export default function makeExpressCallback(controller)
{
    return (req, res) => {

        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            method: req.method,
            auth: req.auth ? req.auth:null,
            headers: {
                "Content-Type": req.get('Content-Type'),
                "Authorization": req.get('Authorization') || null
            }
        }

        controller(httpRequest)
        .then(httpResponse => {
            if(httpResponse.headers)
            {
                res.set(httpResponse.headers)
            }
            res.type('json');
            res.status(httpResponse.statusCode).send(httpResponse.body)
        })
        .catch(e => {
            console.log("express-callback fail ",e)
            res.status(500).send({error: "Unknown Server Error"})
        })
    }
}
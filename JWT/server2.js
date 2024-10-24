const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())
require('dotenv').config()
const posts = [
    {
        id: "149",
        name: "YaminiSaraswathi",
        branch: "IT",
        title: "Welcome to CBIT"
    },
    {
        id: "100",
        name: "ISHU",
        branch: "CSE",
        title: "Welcome to MGIT"
    }
]

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.sendStatus(403)
        }
        req.user = user
        next()
    })
}
app.post('/login', (req, res) => {
    const userid = req.body.userid
    const user = { id: userid }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)

    res.json({ accessTokenis: accessToken })
})
app.use(authenticateToken)
app.get('/posts', (req, res) => {
    console.log(req.user.id)
    res.json(posts.filter(post => post.id === req.user.id))

})
app.listen(4000)
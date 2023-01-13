const http = require('http');
const express = require('express');
const userRouter = require('./routes/user.routes');
const postRouter = require('./routes/post.routes');
const port = process.env.port || 5000

const app = express()
const server = http.createServer(app)

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(port, () => {
    console.log(`server started on port ${port}`)
});

const express = require("express")
const app = express()

// app.get()
// app.post()
// app.delete()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
// app.use(logger)

// app.get('/', logger, (req, res) => {
//     console.log("Here")
//     //res.download("server.js")
//     //res.status(500).json({ message: "Error" })
//     //res.json({ message: "Error" })
//     //res.send('Hi')
//     res.render("index", { text: "World" })
// })


const userRouter = require('./routes/users')
//const postRouter = require('./routes/posts')


app.use('/users', userRouter)
//app.use('/posts', postRouter)

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.listen(3000)
const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    // get name from query link /users?name=someName
    console.log(req.query.name)
    res.send('User List')
})

router.get('/new', (req, res) => {
    //res.send('User New Form')
    res.render("users/new")
    //res.render("users/new", { firstName: "Gwen" })
})

router.post('/', (req, res) => {
    //res.send('Create User')
    const isValid = true
    //const isValid = false
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName })
    }
    console.log(req.body.firstName)
    res.send("aorheagwenosfijl")
})

router
    .route("/:id")
    .get((req, res) => {
        req.params.id
        console.log(req.user)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        req.params.id
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        req.params.id
        res.send(`Delete User With ID ${req.params.id}`)
    })

// router.get('/:id', (req, res) => {
//     req.params.id
//     res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     req.params.id
//     res.send(`Update User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     req.params.id
//     res.send(`Delete User With ID ${req.params.id}`)
// })

const users = [{ name: "barry" }, { name: "gwen" }]

router.param("id", (req, res, next, id) => {
    console.log(id)
    req.user = users[id]
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router
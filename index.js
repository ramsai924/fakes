const express = require('express')
// const User = require("./model/user")
// const mongoose = require('mongoose')
const app = express()

// mongoose.connect("mongodb://localhost:27017/paginaton", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log("db")
// }).catch((err) => { console.log(err) })

app.use(express.json())

app.get("/",(req,res) => {
    res.json("helloworld")
})

// app.get("/users", paginationFun(User),(req,res) => {
//     res.json(res.paginated)
// })

// app.post("/user",(req,res) => {
//     const obj = new User({
//         name : req.body.name
//     })

//     obj.save((err,data) => {
//         if(err) throw err;
//         res.json(data)
//     })
// })

// function paginationFun(model){
//     return async (req,res,next) => {
//         const page = parseInt(req.query.page);
//         const limit = parseInt(req.query.limit);

//         const startIndex = (page - 1) * limit;
//         const endIndex = page * limit;

//         const pagination = {}
//         console.log(Math.floor(await model.countDocuments().exec() / limit) + 1)

//         if (endIndex < await model.countDocuments().exec() ) {
//             pagination.next = {
//                 "page": page + 1,
//                 "limit": limit
//             }
//         }

//         if (startIndex > 0) {
//             pagination.prev = {
//                 "page": page - 1,
//                 "limit": limit
//             }
//         }

//         pagination.result = await model.find().skip(startIndex).limit(limit);
//         res.paginated = pagination;
//         next()
//     }
// }

app.listen(5000,() => {
    console.log("Listen to port 5000")
})
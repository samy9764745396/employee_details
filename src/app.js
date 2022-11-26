const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("../src/database/conn")
const ClientsDetails = require("../src/models/clients")
const clientRoutes = require("./routes/methods")
const loginRoutes = require("./routes/login")

app.use(express.json());                                             // permission from express to get data 
app.use(clientRoutes);
app.use(loginRoutes);


// app.get("/", (req, res) => {
//     res.send("ok sayam")
// })

app.listen(3000, () => {
    console.log("server is at 3000 port")
})













// const bodyParser = require("body-parser");......................................................

// app.use(bodyParser.json())...................................................................

// app.post("/details",async(req,res)=>{
//     try{
// const records =   await ClientsDetails.create(req.body)           
// res.status(200).json({
//     status: "Sucess",
//     records
// })

//     }
//     catch(e){
//         res.status(500).json({
//             status:"failed",
//             message:e.message
//         })

//     }
// })...........................................................................................................





// app.post("/details", async (req, res) => {
//     try {
//         const records = new ClientsDetails(req.body)
//         const ins_records = await records.save()
//         res.send(ins_records)
//     }
//     catch(e)  {
//         res.status(400).send(e)

//     }
// })

// // getting complete data
// app.get("/find", async (req, res) => {
//     try {
//         const get_records = await ClientsDetails.find({})               //.sort({"id":1})
//         res.status(201).send(get_records)
//     }
//     catch(e)  {
//         res.status(400).send(e)

//     }
// })

// //finding by id 
// app.get("/find/:id", async (req, res) => {
//     try {
//         const _id = req.params.id 
//         const get_record = await ClientsDetails.findById({_id:_id})
//         res.status(201).send(get_record)
//     }
//     catch (e){
//         res.status(400).send(e)

//     }
// })


// app.delete("/find/:id", async (req, res) => {
//     try {
//         // const _id = req.params.id 
//         const get_record = await ClientsDetails.findByIdAndDelete(req.params.id)
//         res.status(201).send(get_record)
//     }
//     catch(e) {
//         res.status(400).send(e)

//     }
// })
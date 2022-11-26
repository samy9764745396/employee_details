const express = require("express")
const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    // _id:{type:Number,},
    employeeId: {type: String,required: true},
    name: {type: String,required: true},
    // email: {type: String, unique : true,require:true},
    // password: {type: String,require:true}
})

const ClientsDetails = new mongoose.model("ClientDetail", clientSchema)
module.exports = ClientsDetails



// _id: {
//     idPrefix: "Model",
//     _id: ObjectId("5e1bd112b7f18a490a4bafb5")
// } 
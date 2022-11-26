const mongoose = require("mongoose")

const sequenceSchema = new mongoose.Schema({
    sequenceType: {type: String, required: true},
    value: {type: Number,required: true}
})

// we r creating new collection
const SequenceDetails = new mongoose.model("SequenceDetail", sequenceSchema)

SequenceDetails.findOne({
    sequenceType : "employees",
}).then(r => {
    if(!r) {
        SequenceDetails.create({
            sequenceType : "employees",
            value : 1
        }).then(r => {

        });
    }
})

module.exports = SequenceDetails



// _id: {
//     idPrefix: "Model",
//     _id: ObjectId("5e1bd112b7f18a490a4bafb5")
// }
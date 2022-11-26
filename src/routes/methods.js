const express = require("express")
const router = new express.Router()
const ClientsDetails = require("../models/clients")
const SequenceDetails = require("../models/sequencer")
// const jwt = require('jsonwebtoken');
const bodyParser = require("body-parser");




router.get("/find", async (req, res) => {
    try {
        // write the code to fetch all the users
        const get_records = await ClientsDetails.find({});   // const get_records = await ClientsDetails.find({})
        res.status(200).json({
            status: "Sucess",
            data: get_records
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

function getId(callback) {
    SequenceDetails
        .findOneAndUpdate({
            sequenceType: "employees"
        }, {$inc: {"value": 1}})
        .then(doc => {
            callback(null, doc.value);
        })
        .catch(err => {
            callback(err, -1);
        })
}

//  Read the data for a specific user -- READ OPERTAION
router.get("/find/:id", async (req, res) => {
    try {
        // write the code to fetch all the users
        const get_record = await ClientsDetails.find({ employeeId: req.params.id });
        res.status(200).json({
            status: "Sucess",
            data: get_record
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

// create the data -- CREATE OPERATION
router.post("/post", async (req, res) => {
    try {
        getId(createEmployee);
        function  createEmployee(err, id) {
            if(err) {
                res.status(500).json({
                    status: "failed",
                    message: err.message
                })
            } else {
                const record = ClientsDetails.create({
                    name: req.body.name,
                    employeeId : "EMP_" + id
                }).then(doc => {
                    res.status(200).json({
                        status: "Sucess",
                        doc,
                        // record //..........................................................................
                    })
                })
                    .catch(e => {
                        res.status(500).json({
                            status: "failed",
                            message: e.message
                        })
                    });
            }
        }
    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

//  Delete the data  -- DELETE OPERATION
router.delete("/find/:id", async (req, res) => {
    try {
        // Code to update the document
        const get_record = await ClientsDetails.deleteOne({ _id: req.params.id });

        res.status(200).json({
            status: "Sucess",
            get_record
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

//  Update the data  -- UPDATE OPERATION
// router.put("/find/:id", async (req, res) => {
//     try {
//         // Code to update the document
//         console.log(req.params);
//         const get_record = await ClientsDetails.updateOne({ _id: req.params.id }, req.body);

//         res.status(200).json({
//             status: "Sucess",
//             get_record
//         })

//     } catch (e) {
//         res.status(500).json({
//             status: "failed",
//             message: e.message
//         })
//     }
// });


// router.get("*", (req, res) => {
//     res.status(404).json({
//         status: "failed",
//         message: "Invalid request"
//     })
// });


module.exports = router;











//  const token = jwt.sign({inc_records},'secret_key')
//         res.json({token:token})


// router.post("/details", async (req, res) => {
//     try {
//         const records = new ClientsDetails(req.body)
//         const ins_records = await records.save()
//         res.send(ins_records)
//     //     const token = jwt.sign({exp:Math.floor(Date.now()/1000)+(60*60),
//     //     data:_id},'secret_key')
//      }
//     catch(e) {
//         res.status(400).send(e)

//     }
// })

// // getting complete data
// router.get("/find", async (req, res) => {
//     try {
//         const get_records = await ClientsDetails.find({})               //.sort({"id":1})
//         res.status(201).send(get_records)
//     }
//     catch(e){
//         res.status(400).send(e)

//     }
// })

// //finding by id 
// router.get("/find/:id", async (req, res) => {
//     try {
//         const _id = req.params.id 
//         const get_record = await ClientsDetails.findById({_id:_id})
//         res.status(201).send(get_record)
//     }
//     catch(e){
//         res.status(400).send(e)

//     }
// })


// router.delete("/find/:id", async (req, res) => {
//     try {
//         // const _id = req.params.id 
//         const get_record = await ClientsDetails.findByIdAndDelete(req.params.id)
//         res.status(201).send(get_record)
//     }
//     catch (e){
//         res.status(400).send(e)

//     }
// })

// for updating 
// app.put("/find/:id", async (req, res) => {
//     try {
//         const _id = req.params.id
//         const get_record = await ClientsDetails.findByIdAndUpdate(_id,req.body.{new:true})
//         res.status(201).send(get_record)
//     }
//     catch (e) {
//         res.status(500).send(e)   // 500 showsserver related errors

//     }
// })

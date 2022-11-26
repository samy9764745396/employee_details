
const express = require("express")
const { body, validationResult } = require('express-validator');
const bodyParser = require("body-parser");
const router = express.Router()
const ClientsDetails = require("../models/clients")
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const employeeId = require("./routes/methods")



const secret = "RESTAPI"

router.use(bodyParser.json())



router.post("/register", body("name").isAlpha(), async (req, res) => {

    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, employeeId } = req.body;
        // check whether user is already registered

        let client = await ClientsDetails.findOne({ employeeId });

        if (client) {
            return res.status(401).json({
                status: "Failed",
                message: "Employee exist"
            });
        }

        // bcrypt.hash(password, 10, async function (err, hash) {
        //     if (err) {
        //         return res.status(400).json({
        //             status: "Failed",
        //             message: err.message
        //         });
        //     }

        const clients = await ClientsDetails.create({
            name
            // email,
            // password: hash
        })
        return res.json({
            status: "success",
            message: "Registration succesful",
            clients
        });



    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})

// client = await ClientsDetails.create(req.body)

// res.json({
//     status: "successs",
//     client
// })

router.post("/login", async (req, res) => {

    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
       

        const { name, employeeId} = req.body;

        let client = await ClientsDetails.findOne({ employeeId });

        if (!client) {
            return res.status(401).json({
                status: "Failed",
                message: "User doesnt exists"
            });
        }

        // Load hash from your password DB.
        client.compare(employeeId, function (err, result) {
            // result == true
            if (err) {
                return res.status(500).json({
                    status: "Failed",
                    message: err.message
                });
            }
            if (result) {
                // token will be used to track the user for further operation
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + (60 * 60),
                    data: client._id
                }, secret);


                res.status(200).json({
                    status: "Sucess",
                    message: "Login successful ",
                    token
                });
            } else {
                res.status(401).json({
                    status: "Falied",
                    message: "Invalid credentials !! Please provide correct ID"
                });
            }
        });

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

module.exports = router;























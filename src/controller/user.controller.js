const express = require('express')
const router = express.Router()
const app = express()
app.use(express.json());
const User = require("../models/user.model")

// Crud operation
// Add the data in the datbase
router.post("/", async (req, res) => {
    const user = await User.create(req.body);
    console.log(user);
    return res.status(200).json({ user })
});


// Read the data in the database
router.get("/", async (req, res) => {
    const users = await User.find().lean().exec();
    console.log("akash chandra");
    return res.status(200).json({ users })
});

// Update the data in the database
router.patch("/:id", async (req, res) => {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).send({ users })
})

// Delete the data in the database
router.delete("/:id", async (req, res) => {
    const users = await User.findByIdAndDelete(req.params.id)
    res.status(200).send({ users })
})


//to upload the image using multer



module.exports = router;

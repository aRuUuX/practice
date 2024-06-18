const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

app.use(express.json());

const mongoUrl = "mongodb+srv://rainier:rainier@cluster0.acts4na.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const JWT_SECRET = "hbcwvei2823u02091i09w0h()effewefw[]1e8h099090990e8huqvs1w1eg1g";

mongoose.connect(mongoUrl).then(() => {
    console.log("Database Connected");
}).catch((e) => {
    console.log(e);
});

require('./UserDetails');

const User = mongoose.model("UserInfo");

app.get("/", (req, res) => {
    res.send({ status: "Started" });
});

app.post('/register', async (req, res) => {
    const { fname, lname, email, password } = req.body;

    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
        return res.send({ data: "User already exists!" });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    try {
        await User.create({
            fname: fname,
            lname: lname, // Corrected typo
            email: email,
            password: encryptedPassword,
        });
        res.send({ status: "ok", data: "User Created" });
    } catch (error) {
        res.send({ status: "error", data: error });
    }
});

app.post("/login-user", async (req, res) => {
    const { email, password } = req.body; // Corrected key from res.body to req.body
    const oldUser = await User.findOne({ email: email });

    if (!oldUser) {
        return res.send({ data: "User doesn't exist!" });
    }

    if (await bcrypt.compare(password, oldUser.password)) {
        const token = jwt.sign({ email: oldUser.email }, JWT_SECRET);

        return res.status(201).send({ status: "ok", data: token }); // Ensure proper response status
    } else {
        return res.status(401).send({ error: "Invalid credentials" }); // Added else block to handle invalid credentials
    }
});

app.listen(5002, () => {
    console.log("Node.js server started.");
});

import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import UserController from "controllers/UserController";
require('dotenv').config()

const port = process.env.PORT || 3000;
const jsonweb = process.env.JSON_TOKEN || "Fazeruiop98&JLÇ2!@";

const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get("/user", UserController.init)

app.listen(3000, () => {
    console.log(`Listening in port ${port}, the secret json webtoken is ${jsonweb}`);
})
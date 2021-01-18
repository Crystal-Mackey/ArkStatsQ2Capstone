import express, { response, urlencoded } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { Dino } from "./dinoSchema";
import { userModel } from "./UserSchema";
import { dinoSchema } from "./dinoSchema";
import dotenv from "dotenv";
import mongodb, { Db } from "mongodb";
import { diskUploader } from './upload'

dotenv.config();

const app = express();
const port = process.env.port || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const { MongoClient } = require("mongodb").MongoClient;

const uri = process.env.DB_CONNECTION;
mongoose.Promise = global.Promise;
const client = mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true });

app.get("/", (req, res) => {
  res.send("WELCOME");
});

app.post("/signup", (req, res) => {
  //Done
  const myData = new userModel(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.get("/login/:email", async (req, res) => {
  //Done
  const doc = await userModel.findOne({ email: req.params.email });
  res.send(doc.id);
});

app.get("/user", (req, res) => {
  //Done
  res.send("profile info page");
});

app.get("/library/:yourID", async (req, res) => {
  //Done
  const userDoc = await userModel.findOne({ id: req.params.yourID });
  const displayDino = userDoc.dinos;
  res.json(displayDino);
});

app.post("/library/", async (req, res) => {
  //Done
  const myData = new Dino(req.body.dinoData);
  console.log(req.body.userID);
  const userDoc = await userModel.findOne({ id: req.body.userID });
  userDoc.dinos.push(myData);
  userDoc
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

app.delete("/library/:yourID", async (req, res) => { }); //working on

// app.delete("/library/:user", (req, res) => {
//   res.send("DELETE Request Called");
// Delete request done in backend.
// Send the id of the dino you want to delete to the backend.
//You would need to find the user who has the dino with that id and just slice it off of the array.
// });

// app.get("/user", async (req, res) => {
// store user's tribe name, username and photo
//userModel is what will be used here
//});

app.post("/user", diskUploader.single("file"), (req, res, next) => {
  res.send("Thanks for uploading the file")
});

app.get("*", (req, res) => {
  //Done
  res.status(404).json({
    message: "Sorry, Page not found!",
  });
});

app.listen(4000, () => {
  //Done
  console.log("Express server is now running on port 4000");
});
export { };

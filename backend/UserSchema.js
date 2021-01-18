import mongoose from "mongoose";
import { dinoSchema } from "./dinoSchema";

export const UserSchema = new mongoose.Schema({
  email: String,
  dinos: [dinoSchema],
  id: String,
  name: String,
  tribeName: String,
});

export const userModel = mongoose.model("User", UserSchema);

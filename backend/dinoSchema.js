import mongoose from "mongoose";
export const dinoSchema = new mongoose.Schema({
  // type: mongoose.Schema.Types.ObjectId,
  level: Number,
  creatureType: String,
  name: String,
  health: Number,
  stamina: Number,
  oxygen: Number,
  food: Number,
  weight: Number,
  meleeDamage: Number,
  movementSpeed: Number,
  torpidity: Number,
  imprinting: Number,
  gender: String,
  status: String,
  server: Number,
  owner: String,
  id: Number,
});
export let Dino = mongoose.model("Dino", dinoSchema);

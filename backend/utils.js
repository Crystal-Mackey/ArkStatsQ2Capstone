import path from "path";
import fs from "fs/promises";
import { dinoSchema } from "./dinoSchema";
import { UserSchema } from "./UserSchema";
import { libraryStorage, getUser } from "../frontend/src/utils/api";

export const uploadDirectory = "http://localhost:4000/library";
export const findUploadedFile = async (fileName) => {
  const info = await fs.stat(path.resolve(uploadDirectory, fileName));
  return info;
};

// export const userLibrary = dinos.create(newLibraryDataObj, function (error, createdLibrary) {
//   UserSchema.findOne({
//     email: getUser(),
//     function(error, foundUser) {
//       foundUser.library.push(createdLibrary);
//       foundUser.save();
//     },
//   });
// });

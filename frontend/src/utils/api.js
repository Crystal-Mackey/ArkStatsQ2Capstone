import axios from "axios";
// import { useState } from "react";

const url = "http://localhost:4000";

export const addTolibrary = async (data) => {
  axios.post(`${url}/library`, data);
};

export const libraryStorage = async () => {
  const library = await fetch(`${url}/library`);
  return library;
};

export const register = async (data) => {
  axios.post(`${url}/signup`, data);
};

export const getUser = async (email) => {
  const emailData = await axios.get(`${url}/login/${email}`);
  return emailData.data;
};

export const getDinos = async (userID) => {
  console.log(userID);
  const response = await axios.get(`${url}/library/${userID}`);
  return response.data;
  //return response.userID?
};

//const removeData = (id) => {
// axios.delete(`${URL}/dinos/${id}`).then((res) => {
//   const del = dinos.filter((dino) => id !== dino._id);
//   setDinos(del);
//   console.log("res", res);
// });
//console.log(removeData);
// };

// const deleteData = (id, e) => {
//   axios.delete();
// };

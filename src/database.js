require("dotenv").config();
import mongoose from "mongoose";
const conexion_bd = process.env.DB_GONZADC;

mongoose
  .connect(conexion_bd)
  .then((db) => {
    console.log(`Connected to the Database`);
  })
  .catch((error) => {
    console.log(`Database not connected, error ${error}`);
  });

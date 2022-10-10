require("dotenv").config();
import mongoose from "mongoose";
const conexion_bd =
  "mongodb+srv://gonzamdc:4912806@cluster0.lmhtr.mongodb.net/Database_GonzaDC?retryWrites=true&w=majority";

mongoose
  .connect(conexion_bd)
  .then((db) => {
    console.log(`Connected to the Database`);
  })
  .catch((error) => {
    console.log(`Database not connected, error ${error}`);
  });

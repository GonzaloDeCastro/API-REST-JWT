import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import cors from "cors";
import { createRoles } from "./libs/initialSetup";

import productsRoutes from "./routes/products.routes";
import categoriesRoutes from "./routes/categories.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import roleRoutes from "./routes/role.routes";

const app = express();
createRoles();

app.set("pkg", pkg);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});

app.use("/api/products", productsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/roles", roleRoutes);

export default app;

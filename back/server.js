import express from "express";
import { connectDb } from "./config/config.js";
import ProductRouter from "./routers/router.js";
import cors from "cors";

connectDb();
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", ProductRouter);

app.listen(5000, () => console.log("Server basladi"));
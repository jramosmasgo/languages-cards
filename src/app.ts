import routes from "@routes/index.routes";
import dotenv from "dotenv";
import express, { Application } from "express";
import { errorMiddleware } from "./middlewares/index";
dotenv.config();

const app: Application = express();

app.set("port", process.env.PORT);

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);
export default app;

import express, { Application } from "express";
import { errorMiddleware } from "./middlewares/index";
import routes from "@routes/index.routes";

const app: Application = express();

app.set("port", process.env.PORT || 3001);

app.use(express.json());

app.use(routes);

app.use(errorMiddleware);

export default app;

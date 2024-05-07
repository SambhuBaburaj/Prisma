import express, { Express, Request, Response } from "express";
import RootRouter from "./routes";

const app: Express = express();

app.use("/api", RootRouter);
app.listen(3000, () => {
  console.log("listening on 3000");
});
   
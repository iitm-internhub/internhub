import "dotenv/config";
import express, { Express, Request, Response } from "express";
import connectDatabase from "./db/connectDatabase";

import AuthenticationHandler from "./route/authentication.route";

const PORT: number = Number(process.env.PORT) || 9090;
const app: Express = express();

app.listen(PORT, () => {
  console.log(`now listening on PORT: ${PORT}`);
});

// middlewares
app.use(express.json());

// server routes
app.use("/api/v1/auth", AuthenticationHandler);

connectDatabase();

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running");
});

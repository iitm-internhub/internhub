import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import connectDatabase from "./db/connectDatabase";

import AuthenticationHandler from "./route/authentication.route";

const PORT: number = Number(process.env.PORT) || 9090;
const app: Express = express();

app.listen(PORT, () => {
  console.log(`now listening on PORT: ${PORT}`);
});

const corsOptions = {
  AccessControlAllowOrigin: "*",
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

// middlewares
app.use(express.json());
app.use(cors(corsOptions));

// server routes
app.use("/api/v1/auth", AuthenticationHandler);

connectDatabase();

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running");
});

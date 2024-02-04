import "dotenv/config";
import express, { Express, Request, Response } from "express";

const PORT: number = Number(process.env.PORT) || 9090;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running");
});

app.listen(PORT, () => {
  console.log(`now listening on PORT: ${PORT}`);
});

import express from "express";
import cors from "cors";

import startDatabase from "./services/database";

import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

startDatabase();

app.listen(3000, () => console.log("[*] Server is up"));

import express from "express";
import cors from "cors";

import startDatabase from "./services/database";

import routes from "./routes";

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(routes);

startDatabase();

app.listen(port, () => console.log("[*] Server is up"));

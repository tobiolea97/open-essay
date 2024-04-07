import express from "express";
import ViteExpress from "vite-express";
import bodyParser from "body-parser";
import cors from "cors";
import { routes } from "./routes/index.js";
import openAiEndpoints from "./routes/openAiEndpoints.js";
import { mongoEndpoints } from "./routes/mongoEndpoints.js";
import { initializeDbConnection } from './db.js';
import { intializeMongooseConnection } from './db.js';

const app = express();
initializeDbConnection();
intializeMongooseConnection();

routes.forEach(route => {
  app[route.method](route.path, route.handler);
});

app.use(express.json());

openAiEndpoints(app);
mongoEndpoints(app);

app.use(bodyParser.json());
app.use(cors());


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

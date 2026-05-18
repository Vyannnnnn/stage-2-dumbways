import express from "express";
import mainRoute from "./src/routes/index";
import { loggerMiddleware } from "./src/middlewares/loggerMiddleware";
import { errorHandler } from "./src/middlewares/errorHandlers";

const app = express();
const port = 3000;

app.use(express.json());
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use("/", mainRoute);

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    statusCode: 404,
    message: "Route not found",
    timestamp: new Date().toISOString(),
  });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`this server running at http://localhost:${port}`);
});

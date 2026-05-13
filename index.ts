import express from "express";
import mainRoute from "./src/routes/index";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use("/", mainRoute);

app.listen(port, () => {
  console.log(`this server running at http://localhost:${port}`);
});

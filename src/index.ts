import express from "express";
import helloRoute from "./routes/helloRoute";
import profileRoutes from "./routes/profileRoutes";
import loginRoute from "./routes/loginRoute";

const app = express();
const PORT = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the my world" });
});

app.use("/", helloRoute);
app.use("/", profileRoutes);
app.use("/", loginRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

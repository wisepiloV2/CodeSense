import express from "express";
import { quizRoutes } from "./routes/quizRoutes.js";

const app = express();
const puerto = process.env.PORT || 3000;

app.use("/api", quizRoutes);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

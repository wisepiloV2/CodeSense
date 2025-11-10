import express from "express";
import { quizRutas } from "./routes/quizRoutes.js";

const app = express();
const puerto = process.env.PORT || 3000;

app.use("/api", quizRutas);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en http://localhost:${puerto}`);
});

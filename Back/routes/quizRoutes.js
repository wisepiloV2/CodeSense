import express from "express";
import {
  obtenerQuizPorCategoriaController,
  verificarOpcionElegida,
} from "../controller/quizController.js";
export const quizRutas = express.Router();

quizRutas.get("/quiz", async (req, res) => {
  const { categoria, limite } = req.query;
  const { exito, estado, datos, mensaje } =
    await obtenerQuizPorCategoriaController(categoria, limite);

  return res.status(estado).json(exito ? { datos } : { mensaje });
});

quizRutas.get("/opcion-verificar", async (req, res) => {
  const { id_enunciado, id_opcion } = req.query;
  const { exito, estado, datos, mensaje } = await verificarOpcionElegida(
    id_enunciado,
    id_opcion
  );
  return res.status(estado).json(exito ? { datos } : { mensaje });
});

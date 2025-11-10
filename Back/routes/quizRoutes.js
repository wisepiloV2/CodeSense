import express from "express";
import { obtenerQuizPorCategoriaController } from "../controller/quizController.js";
export const quizRutas = express.Router();

quizRutas.get("/quiz", async (req, res) => {
  const { categoria, limite: limiteStr } = req.query;
  const limite = parseInt(limiteStr) || 5;
  const { exito, estado, datos, mensaje } =
    await obtenerQuizPorCategoriaController(categoria, limite);

  return res.status(estado).json(exito ? { datos } : { mensaje });
});

quizRutas.get("/opcion-verificar", async (req, res) => {});

import express from "express";
import { getQuizzesController } from "../controller/quizController.js";
export const quizRoutes = express.Router();

quizRoutes.get("/quizzes", async (req, res) => {
  const { category, limit: limitStr } = req.query;
  const limit = parseInt(limitStr) || 5;
  const { success, status, data, message } = await getQuizzesController(
    category,
    limit
  );

  return res.status(status).json(success ? { data } : { message });
});

quizRoutes.get("/answers/check", async (req, res) => {});

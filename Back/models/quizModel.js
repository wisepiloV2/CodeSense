import { pool } from "../config/db.mjs";

async function queryDB(query, data = []) {
  try {
    const [result] = await pool.query(query, data);
    return result;
  } catch (error) {
    console.error("Error en consulta a la base de datos:", error);

    throw new Error("Error del servidor: Fallo en la consulta a DB", {
      cause: error,
    });
  }
}

//POST: Una cantidad [limit] de preguntas de una misma [category]
export async function getQuestions(category, limit) {
  const query = "";
  const data = [categoria, limite];
  return await queryDB(query, data);
}

export async function getAnswer(id_question) {
  const query = "";
  const data = [id_question];
  return await queryDB(query, data);
}

export async function getAnswers() {
  const query = "";
  const data = null;
  return await queryDB(query, data);
}

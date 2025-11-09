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

export async function getQuizzesDB(categoria, limite) {
  const query = "";
  const data = [categoria, limite];
  return await queryDB(query, data);
}

export async function getAnswers(id_enunciado, id_respuesta) {
  const query = "";
  const data = [id_enunciado, id_respuesta];
  return await queryDB(query, data);
}

import { pool } from "../config/db.mjs";

async function ConsultaBaseDeDatos(query, datos = []) {
  try {
    const [resultado] = await pool.query(query, datos);
    return resultado;
  } catch (error) {
    console.error("Error en consulta a la base de datos:", error);

    throw new Error("Error del servidor: Fallo en la consulta a DB", {
      cause: error,
    });
  }
}

export async function obtenerQuizPorCategoria(categoria, limite) {
  const cteParaLimiteDeEnunciados = `WITH PrimerosEnunciados AS (
    SELECT
        e.id
    FROM
        Enunciados e
    JOIN
        Categorias c ON e.id_categoria = c.id
    WHERE
        c.categoria = '${categoria}'
    LIMIT ${limite}
)`;

  const query = `${cteParaLimiteDeEnunciados} 
  SELECT
    e.id AS id_enunciado,
    e.enunciado,
    o.id AS id_opcion,
    o.opcion
  FROM
      Enunciados e
  JOIN
      Opciones o ON o.id_enunciado = e.id
  JOIN
      PrimerosEnunciados pe ON e.id = pe.id;`;

  const datos = [categoria, limite];
  return await ConsultaBaseDeDatos(query, datos);
}

export async function obtenerOpcionCorrectaYSeleccionada(
  id_enunciado,
  id_opcion
) {
  const query = `
  SELECT
    oc.opcion AS opcion_correcta,
    oc.justificacion AS justificacion_correcta,
    oe.opcion AS opcion_elegida,
    oe.justificacion AS justificacion_elegida
  FROM
      Enunciados e
  LEFT JOIN
      Opciones oc ON e.id = oc.id_enunciado AND oc.correcta = TRUE
  LEFT JOIN
      Opciones oe ON e.id = oe.id_enunciado AND oe.id = ${id_opcion}
  WHERE
      e.id = ${id_enunciado};
    `;
  const data = [id_enunciado, id_opcion];
  return await ConsultaBaseDeDatos(query, data);
}

import { obtenerQuizPorCategoria } from "../models/quizModel.js";

function errorInternoDelServidor() {
  return {
    exito: false,
    estado: 500,
    mensaje: "Ocurrió un error inesperado en el servidor.",
  };
}

function errorParaUsuario(exito, estado, mensaje) {
  return {
    exito: exito,
    estado: estado,
    mensaje: mensaje,
  };
}

export async function obtenerQuizPorCategoriaController(categoria, limite) {
  try {
    const datos = await obtenerQuizPorCategoria(categoria, limite);

    if (!datos || datos.length === 0) {
      const mensaje = `No existen enunciados para la categoria: '${categoria}'.`;
      return errorParaUsuario(false, 404, mensaje);
    }

    return { exito: true, estado: 200, datos: datos };
  } catch (error) {
    console.error("Error en obtenerQuizPorCategoriaController:", error);
    return errorInternoDelServidor();
  }
}

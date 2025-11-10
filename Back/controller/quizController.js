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

    const datosFormateados = formatearDatos(datos);

    return { exito: true, estado: 200, datos: datosFormateados };
  } catch (error) {
    console.error("Error en obtenerQuizPorCategoriaController:", error);
    return errorInternoDelServidor();
  }
}

function formatearDatos(datos) {
  const quizAgrupado = {};

  for (const fila of datos) {
    const enunciadoId = fila.id_enunciado;

    if (!quizAgrupado[enunciadoId]) {
      quizAgrupado[enunciadoId] = {
        id_enunciado: enunciadoId,
        enunciado: fila.enunciado,
        opciones: [],
      };
    }

    quizAgrupado[enunciadoId].opciones.push({
      id_opcion: fila.id_opcion,
      opcion: fila.opcion,
    });
  }

  return Object.values(quizAgrupado);
}

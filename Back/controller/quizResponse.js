import { getQuestions } from "../models/quizModel.js";

function internalServerError() {
  return {
    success: false,
    status: 500,
    message: "Ocurrió un error inesperado en el servidor.",
  };
}

function errorToUser(success, status, message) {
  return {
    success: success,
    status: status,
    message: message,
  };
}

export async function getQuizzesController(category, limit) {
  try {
    const data = await getQuestions(category, limit);

    if (!data || data.length === 0) {
      const message = `No se encontraron preguntas para la categoría '${category}'.`;
      return errorToUser(false, 404, message);
    }

    return { success: true, status: 200, data: data };
  } catch (error) {
    console.error("Error en getQuestionsController:", error);
    return internalServerError();
  }
}

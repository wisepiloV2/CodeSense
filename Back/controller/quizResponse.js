function errorToUser() {
  return {
    success: false,
    status: 500,
    message: "Ha ocurrido un error inesperado en el servidor.",
  };
}

function getQuestionsController() {
  try {
  } catch (error) {
    console.error("Error en quizResponse:", error);
  }
}

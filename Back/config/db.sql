DROP DATABASE IF EXISTS Quiz;
CREATE DATABASE IF NOT EXISTS Quiz;
USE Quiz;

CREATE TABLE IF NOT EXISTS Categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS Enunciados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT NOT NULL,
    enunciado TEXT NOT NULL,
    dificultad INT,
    pista TEXT,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id)
);

CREATE TABLE IF NOT EXISTS Opciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_enunciado INT NOT NULL,
    opcion TEXT NOT NULL,
    correcta BOOLEAN NOT NULL,
    justificacion TEXT NOT NULL,
    FOREIGN KEY (id_enunciado) REFERENCES Enunciados(id)
);

/* Ejemplo sencillo */

INSERT INTO Categorias (categoria) VALUES ('Docker');

/* Se usa {code} ... {code} en el texto a resaltar */


INSERT INTO Enunciados (id_categoria, enunciado, dificultad, pista) VALUES 
(
    1, 'Un desarrollador intenta construir una imagen y el proceso falla con el error {code} COPY failed: stat /ruta/al/archivo: no such file or directory {code}. ¿Cuál es la causa más probable de este fallo de Nivel 1 y qué comando de diagnóstico debe insertar temporalmente en el Dockerfile para verificarlo?', 1, 'El problema está en lo que Docker puede /"ver/" desde el directorio de ejecución del comando docker build.'
);

INSERT INTO Opciones (id_enunciado, opcion, correcta, justificacion) VALUES
(
    1, 'Causa: El archivo está fuera del Contexto de Construcción o es excluido por {code}.dockerignore{code}. Diagnóstico: Insertar la instrucción {code}RUN ls -lah{code} antes del {code}COPY{code} fallido.', TRUE, 'El error indica que Docker no tiene acceso al archivo. Insertar {code}RUN ls -lah{code} revela exactamente qué archivos están disponibles en el contexto de construcción en esa etapa, confirmando o descartando la causa.'
),

(
    1, 'Causa: El usuario no tiene permisos. Diagnóstico: Ejecutar {code}docker build{code} con {code}sudo{code}.', FALSE, 'Si el archivo existe en el contexto, Docker usa los permisos del usuario que ejecuta el demonio; el problema aquí es de accesibilidad en el contexto de construcción, no de permisos de usuario sobre el archivo en sí'
),

(
    1, 'Causa: El archivo es demasiado grande. Diagnóstico: Revisar la configuración de recursos del Docker Daemon.', FALSE, 'Aunque el tamaño podría ser un problema, el error de {code}stat{code} se refiere a la incapacidad de encontrar el archivo o directorio en el contexto, no a su tamaño.'
),

(
    1, 'Causa: El archivo es un enlace simbólico. Diagnóstico: Usar {code}ADD{code} en lugar de {code}COPY{code}.', FALSE, 'El problema principal con {code}COPY failed: stat{code} es casi siempre que el archivo no está en el contexto de construcción; el uso de {code}ADD{code} no resuelve este problema subyacente.'
);



INSERT INTO Enunciados (id_categoria, enunciado, dificultad, pista) VALUES 
(
    1, 'Un contenedor crítico de producción arranca e inmediatamente sale con el estado {code}Exited (1){code}. ¿Cuál es el comando esencial de diagnóstico de Nivel 1 que debe ejecutar inmediatamente para comprender la causa raíz del fallo en el ciclo de vida de la aplicación?', 1, 'Necesitas ver lo que la aplicación estaba intentando decir justo antes de morir.'
);

INSERT INTO Opciones (id_enunciado, opcion, correcta, justificacion) VALUES
(
    2, '{code}docker inspect <id>{code}', FALSE, 'Este comando proporciona metadatos (redes, volúmenes), pero no el output de la aplicación (stdout/stderr) que causó la salida inesperada.'
),

(
    2, '{code}docker exec -it <id> /bin/bash{code}', FALSE, 'No es posible ejecutar un comando interactivo en un contenedor que ya ha salido (Exited), por lo que esta acción fallaría.'
),

(
    2, '{code}docker system prune -a{code}', FALSE, 'Este comando limpia recursos no utilizados y no proporciona información de diagnóstico sobre la causa del fallo de un contenedor específico.'
),

(
    2, '{code}docker logs <id>{code}', TRUE, 'El comando {code}docker logs <id>{code} es fundamental para capturar la salida estándar y los errores (stdout/stderr) de la aplicación, lo que revela por qué falló al iniciar (ej. dependencia faltante o error de sintaxis en {code}ENTRYPOINT{code}).'
);
CREATE TABLE Category (
    id_category INT AUTO_INCREMENT PRIMARY KEY,
    name_category VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Question (
    id_question INT AUTO_INCREMENT PRIMARY KEY,
    id_category INT NOT NULL,
    text_question TEXT NOT NULL,
    lvl_dificulty INT,
    hint TEXT,
    FOREIGN KEY (id_category) REFERENCES Category(id_category)
);

CREATE TABLE OptionAnswer (
    id_option INT AUTO_INCREMENT PRIMARY KEY,
    id_question INT NOT NULL,
    text_option TEXT NOT NULL,
    is_correct BOOLEAN NOT NULL,
    justification TEXT NOT NULL,
    FOREIGN KEY (id_question) REFERENCES Question(id_question)
);
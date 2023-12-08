-- POSTGRES

CREATE DATABASE firstdb;


--  tabla programa
CREATE TABLE programa (
    programa_id SERIAL PRIMARY KEY,
    facultad_id INTEGER,
    nombre VARCHAR(100),
    cod_programa VARCHAR(100),
    tipo VARCHAR(10)
);

-- tabla facultad


CREATE TABLE IF NOT EXISTS facultad (
    facultad_id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    abreviatura VARCHAR(20),
    id_area INTEGER
);

-- tabla USUARIO

CREATE TABLE IF NOT EXISTS usuario (
    usuario_id SERIAL PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    rol VARCHAR(100) DEFAULT 'user'
);
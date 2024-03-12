import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import { pool } from "./db";

const port = process.env["PORT"] || 5500;

if(process.env["NODE_ENV"] === "test"){
    configDotenv({ path: ".env.test" });
}else {
    configDotenv();
}

// apagamos el servicio de la conexion a la base de datos por si ocurre un error inesperado
const gracefulShutdown = () => {
    pool.end(() => {
        console.log("\nApplication enden gracefully");
        process.exit(0);
    });
};

process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);

const app = express();

const corsOptiones = {
    origin: process.env["CLIENT_ORIGIN"],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptiones));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
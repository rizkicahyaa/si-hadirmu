import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const dbHost = process.env.DB_HOST || "localhost";
const dbUser = process.env.DB_USER || "root";
const dbPassword = process.env.DB_PASSWORD || "";
const dbDatabase = process.env.DB_NAME || "db_presensi";
const dbPort = process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306;

export const pool = mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbDatabase,
    port: dbPort,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export async function initDatabase(): Promise<void> {
    const connection = await pool.getConnection();
    try {
        await connection.ping();
        console.log("[DB] Connected to MySQL db_presensi");
    } finally {
        connection.release();
    }
}



import app from "./src/app";
import { initDatabase } from "./src/config/db";

const PORT = 5000;

async function start() {
    try {
        await initDatabase();
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("Failed to initialize database:", err);
        process.exit(1);
    }
}

start();

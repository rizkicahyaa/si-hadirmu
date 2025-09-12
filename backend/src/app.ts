import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import presensiRoutes from "./routes/presensi.routes";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/presensi", presensiRoutes);

export default app;

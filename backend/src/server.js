import express from "express"
import dotenv from "dotenv"

import authRoutes from "./routes/auth.rout.js"
import massageRoutes from "./routes/massage.rout.js"

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/massage", massageRoutes);

app.listen(port, () => console.log(`Server Running on port: ${port}`))
import express from "express"
import dotenv from "dotenv"
import path from "path"

import authRoutes from "./routes/auth.rout.js"
import massageRoutes from "./routes/massage.rout.js"

const app = express();
dotenv.config();

const __dirname = path.resolve();
const port = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/massage", massageRoutes);

//make ready for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
    })
}

app.listen(port, () => console.log(`Server Running on port: ${port}`))
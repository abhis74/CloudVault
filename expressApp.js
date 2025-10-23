import express from "express"
import direcortyRoutes from "./routes/directoryRoutes.js"
import filesRoutes from "./routes/filesRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import checkAuth from "./auth.js"
import { connectDB } from "./db.js"
export const mySecrate = "mySecrateKey#12345";

try {
     await connectDB()
    const app = express()
    app.use(cookieParser(mySecrate))
    app.use(cors({
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
    }))
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }));
    app.use("/directory", checkAuth, direcortyRoutes)
    app.use("/files", checkAuth, filesRoutes)
    app.use("/user", userRoutes)
    app.listen(3000, () => {
        console.log("Server is running on prot on 3000")
    })

} catch (err) {
    console.log(err)
}
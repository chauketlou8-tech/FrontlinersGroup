//app logic for the routes

import app from "../../app"

import authRoutes from "./auth.routes"

app.use("/api/auth", authRoutes)
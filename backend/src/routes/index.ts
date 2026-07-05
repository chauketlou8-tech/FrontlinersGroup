//app logic for the routes

import { Router } from "express";

import authRoutes from "./auth.routes"
import enrollmentRoutes from "./enrollment.routes"
import adminRoutes from "./admin.routes"

const router = Router();

router.use("/auth", authRoutes)
router.use("/enrollment", enrollmentRoutes)
router.use("/admin", adminRoutes)

export default router;
import router from "./config"
import login from "../controllers/auth.controllers";
import authMiddleware from "../middleware/AuthMiddleware";
import adminMiddleware from "../middleware/AdminMiddleware";

router.post("/", login);//login
router.post("/logout", authMiddleware, adminMiddleware);
router.post("/resetPassword", );
router.post("/refreshToken", );

export default router;
import router from "./config"
import { login, logout, resetPassword, setNewPassword, validateToken, refreshUserToken } from "../controllers/auth.controllers";
import authMiddleware from "../middleware/AuthMiddleware";
import adminMiddleware from "../middleware/AdminMiddleware";

router.post("/", login);//login
router.post("/resetPassword", resetPassword); //get reset password link
router.get("/validate-token", validateToken); //validate reset password link
router.patch("/setNewPassword", setNewPassword); //set new password
router.post("/refreshToken", refreshUserToken); //refresh token
router.delete("/logout/:id", authMiddleware, adminMiddleware, logout); //logout

export default router;
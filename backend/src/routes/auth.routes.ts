import router from "./config"
import { login, logout, resetPassword, setNewPassword, validateToken, refreshUserToken } from "../controllers/auth.controllers";
import authMiddleware from "../middleware/AuthMiddleware";
import adminMiddleware from "../middleware/AdminMiddleware";
import AuthValidator from "../validations/auth.validation"

router.post("/", AuthValidator.loginValidation, login);//login
router.post("/resetPassword", AuthValidator.resetPasswordValidation, resetPassword); //get reset password link
router.get("/validate-token", AuthValidator.resetTokenValidation, validateToken); //validate reset password link
router.patch("/setNewPassword", AuthValidator.resetTokenValidation, AuthValidator.newPasswordValidation, setNewPassword); //set new password
router.post("/refreshToken", AuthValidator.refreshTokenValidation, refreshUserToken); //refresh token
router.delete("/logout/:id", authMiddleware, adminMiddleware, logout); //logout

export default router;
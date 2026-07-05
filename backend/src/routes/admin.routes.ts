import router from "./config"

import { createAdmin } from "../controllers/admin.controllers";
import AdminValidator from "../validations/admin.Validation";

router.post("/admin", AdminValidator.createValidation, createAdmin);

export default router;
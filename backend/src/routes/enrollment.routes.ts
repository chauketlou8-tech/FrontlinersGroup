import router from "./config"
import { enroll } from "../controllers/enrollment.controllers"
import EnrollmentValidator from "../validations/enrollment.validation";

router.post("/", EnrollmentValidator.enrollmentValidation, enroll);

export default router;
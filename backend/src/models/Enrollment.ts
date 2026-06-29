import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
    studentInfo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    selectedSubjects: {
        type: [String],
        enum: ["Mathematics", "Physics"],
        required: true
    },
    grade: {
        type: String,
        required: true,
        enum: ["Grade 10", "Grade 11", "Grade 12"]
    }
}, { timestamps: true });

const EnrollmentModel = mongoose.model("Enrollment", EnrollmentSchema);
export default EnrollmentModel;
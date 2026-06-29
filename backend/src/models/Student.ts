import mongoose from "mongoose";

const StudentShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    grade: {
        type: String,
        required: true,
        enum: ["Grade 10", "Grade 11", "Grade 12"]
    },
    subjects: {
        type: [String],
        required: true,
        minlength: 1
    },
    contactDetails: {
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
        }
    }
});

const StudentModel = mongoose.model("Student", StudentShema);

export default StudentModel;
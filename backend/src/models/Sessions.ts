import mongoose from "mongoose";

const SessionsSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
        enum: ["Grade 10", "Grade 11", "Grade 12"]
    },
    Tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    },
    StartTime: {
        type: Date,
        required: true,
    },
    EndTime: {
        type: Date,
        required: true,
    },
    Students: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Student",
                required: true,
            }
        ]
    }
}, { timestamps: true });
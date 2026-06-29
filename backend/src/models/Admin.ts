import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashedPassword: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["super", "admin", "viewer"]
    }
}, {timestamps: true});

const AdminModel = mongoose.model("Admin", AdminSchema);

export default AdminModel;
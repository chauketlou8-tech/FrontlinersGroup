import mongoose from "mongoose";

const PaymentsSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    month: {
        type: String,
        required: true,
        default: new Date().getMonth(),
    },
    Amount: {
        type: Number,
        required: true,
    },
    PaymentMethod: {
        type: String,
        required: true,
    },
    referenceNumber: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "Paid", "Overdue"],
    }
}, { timestamps: true });

const PaymentModel = mongoose.model("Payment", PaymentsSchema);

export default PaymentModel;
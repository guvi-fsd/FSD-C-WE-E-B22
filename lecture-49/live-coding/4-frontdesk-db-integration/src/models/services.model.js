import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true, min: 1 },
    durationMins: { type: Number, required: true, min: 5 }
}, { timestamps: true });

export const Service = mongoose.model("Service", serviceSchema);
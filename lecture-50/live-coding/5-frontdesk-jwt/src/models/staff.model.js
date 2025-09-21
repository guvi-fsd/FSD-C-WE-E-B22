import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, match: /.+@.+\..+/ },
    // admin, manager, receptionist
    role: { type: String, enum: ["admin", "manager", "receptionist"] },
    passwordHash: { type: String, require: true }
}, { timestamps: true });

export const Staff = mongoose.model("Staff", staffSchema);
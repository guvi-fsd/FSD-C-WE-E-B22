import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    // abc@abc.com
    customerEmail: { type: String, required: true, lowercase: true, match: /.+@.+\..+/ },
    serviceId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Service", index: true },
    bookingStart: { type: Date, required: true, index: true },
    // ACTIVE, CANCELLED, COMPLETED
    status: { type: String, enum: ["ACTIVE", "CANCELLED", "COMPLETED"], default: "ACTIVE", index: true },
    // mutable - the value can be changed
    bookingDate: { type: Date, default: () => new Date(), immutable: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Staff", index: true }
}, { timestamps: true });

export const Booking = mongoose.model("Booking", bookingSchema);

/*
Index - bookingStart on bookings collection
customerName,bookingStart
vimal,15-09-2025T09:00:00.000Z
logeshwaran,15-09-2025:00:00.000Z
kashish,16-09-2025T12:00:00.000Z
mathesh,24-09-2025:00:00.000Z
saravanan,27-09-2025:00:00.000Z



// Service
{
    "_id": ObjectId("abc")
    "name": "Haircut",
    "description": "A terrific haircut",
    "price": 150,
    "durationMins": 15
}

// Booking
{
    "customerName": "abc",
    "customerEmail": "abc@bcd.com",
    "serviceId": ObjectId("abc")
}
*/
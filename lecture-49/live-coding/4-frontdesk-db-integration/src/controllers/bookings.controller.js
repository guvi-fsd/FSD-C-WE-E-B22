import mongoose, { mongo } from "mongoose";
import { Booking } from "../models/booking.model.js";
import { Service } from "../models/services.model.js";
/*
export async function createBooking(req, res, next) {
  try {
  } catch(err) {
    next(err);
  }
}
*/
export async function createBooking(req, res, next) {
    const { customerName, customerEmail, serviceId, bookingStart } = req.body || {};
    
    if(!customerName || !customerEmail || !serviceId || !bookingStart) {
      return res.status(400).json({ error: true, message: "Missing or invalid fields"});
    }

    if(!mongoose.Types.ObjectId.isValid(serviceId)) {
        return res.status(400).json({ error: true, message: "Invalid service Id"});
    }
    
    // Stub for a booking (no database involvement, yet)
    const booking = await Booking.create({
        customerName,
        customerEmail,
        serviceId,
        bookingStart,
        createdBy: new mongoose.Types.ObjectId(req.user.id)
    })
    
    const createdBooking = await Booking.findById(booking._id).lean();

    // Send an email
    let email = { sent: false };
    try {
        const info = await sendBookingEmail(
        { to: customerEmail, customerName, bookingStartISO: bookingStart, serviceName: "Haircut" }
        );
        email = { sent: true, messageId: info.messageId };
    } catch(err) {
        email = { sent: false, error: "Email dispatch failed" };
    }

    return res.status(201).json({ ...createdBooking });

}

export async function listBookings(req, res, next) {
  try {
    const filter = {};

    // Role-aware scope
    if(req.user.role === "receptionist") {
      filter.createdBy = new mongoose.Types.ObjectId(req.user.id);
    }

    const bookings = await Booking.find(filter)
      .sort({ bookingStart: -1 })
      .lean();

    return res.status(200).json(bookings);
  } catch(err) {
    next(err);
  }
}
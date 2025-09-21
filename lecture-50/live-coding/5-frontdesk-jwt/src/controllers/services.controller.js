import { Service } from "../models/services.model.js";

export async function listServices(req, res, next) {
  try {
      const services = await Service.find().sort({ createdAt: -1 }).lean();
      res.status(200).json(services);
  } catch(err) {
    next(err);
  }
}

export async function createService(req, res) {
  const { name, description, price, durationMins } = req.body || {};
    // Validation for missing name, price, durationMins
    // price < 0
    // durationMins < 0
    try {
        const doc = await Service.create({ name, description, price, durationMins });
        res.status(201).json(doc);
    } catch(err) {
    next(err);
  }
}
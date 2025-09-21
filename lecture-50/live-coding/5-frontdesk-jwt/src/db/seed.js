import 'dotenv/config';
import mongoose from 'mongoose';
import { connectMongo } from './mongoose.js';
import { Staff } from '../models/staff.model.js';
import { Service } from '../models/services.model.js';
import { hashPassword } from '../services/password.service.js';

async function run() {
  await connectMongo(process.env.MONGODB_URI);

  // Clear demo data (safe for classroom runs)
  await Promise.all([Staff.deleteMany({}), Service.deleteMany({})]);

  const pass = "password123";

  const hashedPass = await hashPassword(pass);

  const [admin, manager, receptionist] = await Staff.create([
    { name: 'Alice Admin', email: 'admin@frontdesk.local', role: 'admin', passwordHash: hashedPass },
    { name: 'Mohan Manager', email: 'manager@frontdesk.local', role: 'manager', passwordHash: hashedPass },
    { name: 'Riya Reception', email: 'reception@frontdesk.local', role: 'receptionist', passwordHash: hashedPass }
  ]);

  const [svc1, svc2, svc3] = await Service.create([
    { name: 'Haircut', description: 'Standard cut', price: 300, durationMins: 30 },
    { name: 'Shave', description: 'Clean shave', price: 150, durationMins: 15 },
    { name: 'Facial', description: 'Basic facial', price: 600, durationMins: 45 }
  ]);

  console.log('\n Seed complete.');
  console.log('Staff IDs:');
  console.log('  admin        :', admin._id.toString());
  console.log('  manager      :', manager._id.toString());
  console.log('  receptionist :', receptionist._id.toString());
  console.log('\nService IDs:');
  console.log('  Haircut      :', svc1._id.toString());
  console.log('  Shave        :', svc2._id.toString());
  console.log('  Facial       :', svc3._id.toString());

  await mongoose.connection.close();
  process.exit(0);
}

run().catch(err => {
  console.error('Seed failed:', err);
  process.exit(1);
});

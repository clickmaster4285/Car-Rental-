// backend/config/bootstrap.js
const User = require("../models/User");

exports.initializeAdminAccount = async () => {
  const adminEmail = process.env.ADMIN_EMAIL;

  const admin = await User.findOne({ email: adminEmail });
  if (admin) return console.log("Admin already exists");

  const newAdmin = new User({
    name: `${process.env.ADMIN_FIRST_NAME} ${process.env.ADMIN_LAST_NAME}`,
    email: adminEmail,
    password: process.env.ADMIN_PASSWORD,
    role: process.env.ADMIN_ROLE || "admin"
  });

  await newAdmin.save();
  console.log("✅ Admin account created:", adminEmail);
};
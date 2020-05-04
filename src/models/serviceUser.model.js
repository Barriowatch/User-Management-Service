const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ServiceUserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
    },
    lastname: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
    },
    phone: {
      type: String,

    },
    emergency_service_provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
    },
    birth_date: { type: Date },
    gender: { type: String },

    location: {
      type: { type: String },
      coordinates: [],
    },
  },
  { timestamps: true },
);

ServiceUserSchema.plugin(uniqueValidator, { message: 'is already taken' });
module.exports = mongoose.model(
  'ServiceUser',
  ServiceUserSchema,
);

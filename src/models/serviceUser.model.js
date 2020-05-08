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
    barrio_id: { type: String },
    birth_date: { type: Date },
    gender: { type: String },
    profile_picture_url: { type: String },
    location: {
      type: { type: String },
      coordinates: [],
    },
  },
  { timestamps: true },
);

ServiceUserSchema.plugin(uniqueValidator, { message: 'is already taken' });

// eslint-disable-next-line no-unused-vars
ServiceUserSchema.methods.toProfileJSONFor = _user => ({
  firstname: this.firstname,
  lastname: this.lastname,
  email: this.email,
});

module.exports = mongoose.model(
  'ServiceUser',
  ServiceUserSchema,
);

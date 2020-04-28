const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ServiceSchema = new mongoose.Schema(
  {
    name: {
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

    administrator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'EmergencyServiceProviderUser',
    },
    collaborators: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'EmergencyServiceProviderUser',
      },
    ],

    type: { type: String, require: true },
    contact_person_name: { type: String },
    contact_person_phone: { type: String },
    website: { type: String },
    profile_picture_url: { type: String },
    barrio_id: { type: Number },
    status: { type: String },
    description: { type: String },
    office_location: { type: String },
    location: {
      type: { type: String },
      coordinates: [],
    },
  },
  { timestamps: true },
);

ServiceSchema.plugin(uniqueValidator, { message: 'is already taken' });
module.exports = mongoose.model(
  'Service',
  ServiceSchema,
);

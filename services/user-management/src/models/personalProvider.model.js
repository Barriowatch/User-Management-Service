/* eslint-disable func-names */
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PersonalProviderSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
      index: true,
    },
    lastname: {
      type: String,
      lowercase: true,
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
    status: { type: String },
    profile_picture_url: { type: String },
    birth_date: { type: Date },
    gender: { type: String },
    barrio_id: { type: Number },
    location: {
      type: { type: String },
      coordinates: [],
    },
  },
  { timestamps: true },
);
PersonalProviderSchema.plugin(uniqueValidator, { message: 'is already taken' });

// eslint-disable-next-line no-unused-vars
PersonalProviderSchema.methods.toProfileJSONFor = function (_user) {
  return {
    firstname: this.firstname,
    lastname: this.lastname,
    email: this.email,
  };
};

module.exports = mongoose.model(
  'PersonalServiceProvider',
  PersonalProviderSchema,
);

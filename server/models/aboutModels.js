const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      unique: true,
    },
    data: {
      qehremanlarimiz: [
        {
          image: { type: String },
          name: { type: String },
          sehidOlduguTarix: { type: String },
          birthday: { type: String },
          ixtisasi: { type: String },
          qrup: { type: String },
          bitirdiyiİl: { type: String },
          rutbe: { type: String },
          teltifleri: { type: String },
        },
      ],
      fexriDoktorlar: [
        {
          image: { type: String },
          text: { type: String },
          name: { type: String },
          date: { type: String },
        },
      ],
      fexriMezunlar: [
        {
          name: { type: String },
          text: { type: String },
        },
      ],
      prorektorlar: [
        {
          image: { type: String },
          name: { type: String },
          text: { type: String },
        },
      ],
      sabiqrektorlar: [
        {
          image: { type: String },
          name: { type: String },
          text: { type: String },
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("aztuAbout", aboutSchema);

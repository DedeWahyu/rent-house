const mongoose = require("mongoose");
const { getCurrentTime } = require("../utils/time");
const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    },
    total_amount: {
      type: Number,
    },
    status: {
      type: Number,
      enum: [0, 1, 2],
      default: 1,
      required: true,
    },
    created_at: {
      type: Date,
      default: getCurrentTime,
    },
    updated_at: {
      type: Date,
      default: getCurrentTime,
    },
  },
  { collection: "bookings" }
);

bookingSchema.pre("save", async function (next) {
  const booking = this;
  const oneMonth = 1000 * 60 * 60 * 24 * 30;
  const durationInMonths = Math.ceil(
    (booking.end_date - booking.start_date) / oneMonth
  );

  // Temukan properti untuk mendapatkan harga
  const property = await mongoose.model("Property").findById(booking.property);

  if (property) {
    booking.total_amount = durationInMonths * property.price;
  } else {
    throw new Error("Properti tidak ditemukan");
  }

  booking.update_time = getCurrentTime;
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;

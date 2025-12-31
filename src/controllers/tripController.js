const tripmodel = require("../models/tripmodel");


// Create Trip
exports.createTrip = async (req, res) => {
  try {
    const { destination, startDate, endDate, tripmates } = req.body;
console.log(req)
    const trip = new tripmodel({
      destination,
      startDate,
      endDate,
      tripmates, // array of strings
    });

    await trip.save();

    res.status(201).json({
      success: true,
      message: "Trip created successfully",
      data: trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Trips
exports.getAllTrips = async (req, res) => {
  try {
    const trips = await tripmodel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: trips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Trip by ID
exports.getTripById = async (req, res) => {
  try {
    const trip = await tripmodel.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      data: trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Trip
exports.updateTrip = async (req, res) => {
  try {
    const trip = await tripmodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Trip updated successfully",
      data: trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Trip
exports.deleteTrip = async (req, res) => {
  try {
    const trip = await tripmodel.findByIdAndDelete(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Trip deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

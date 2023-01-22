const { CityService } = require("../services/index");

const cityService = new CityService();

/**
 * POST
 * data -> req.body
 */

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "City created successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error creating city",
      err: err,
    });
  }
};

// DELETE -> /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "City deleted successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error deleting city",
      err: err,
    });
  }
};

// PATCH -> /city/:id
const update = async (req, res) => {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "City updated successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error updating city",
      err: err,
    });
  }
};

// GET -> /city/:id
const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "City fetched successfully",
      err: {},
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error fetching city",
      err: err,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
};

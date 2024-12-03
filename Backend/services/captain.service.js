const captainModel = require("../models/captain.model");

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  capacity,
  vehicalType,
}) => {
  // Check for required fields
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicalType
  ) {
    throw new Error("All fields are required!");
  }

  try {
    // Create the captain using the model
    const captain = await captainModel.create({
      fullname: {
        firstname,
        lastname,
      },
      email,
      password, // Consider hashing the password for security
      vehicle: {
        color,
        plate,
        capacity,
        vehicalType,
      },
    });

    return captain; // Return the created captain
  } catch (error) {
    throw new Error(`Error creating captain: ${error.message}`);
  }
};

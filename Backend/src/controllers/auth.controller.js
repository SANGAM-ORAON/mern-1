import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function registerUserController(req, res) {
  const { name, email, password } = req.body;
  
  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({ name, email, password: hash });
  
  res.status(200).json({
    message: "success",
  });
}

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error"
    });
  }
};

export default { registerUserController, loginUserController };

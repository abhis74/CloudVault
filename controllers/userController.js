import { Types } from "mongoose";
import Directory from "../models/directoryModel.js";
import User from "../models/userModel.js";
import crypto from "crypto";

export const createUser = async (req, res, next) => {
  console.log(req.body)
  const { name, email, password } = req.body;
  
  const db = req.db;
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const existingUser = await User.findOne({ email }).lean();
  console.log(existingUser, "existingUser");

  try {
    const rootDirId = new Types.ObjectId();
    const userId = new Types.ObjectId();
    const userRootFolder = await Directory.insertOne({
      name: `root-${email}`,
      parentId: null,
      userID: userId,
    });

    const dirId = userRootFolder._id;

    const createdUser = await User.insertOne({
      name,
      email,
      password: hashedPassword,
      rootDirId: dirId,
    });
    const userID = createdUser._id;
    await Directory.updateOne({ _id: dirId }, { $set: { userID: userID } });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    // console.error('Error writing to file', error);
    if (error.code === 212) {
      res.status(400).json({
        error: "Invalid Fields",
      });
    } else if (error.code === 11000 && error.keyValue.email) {
      return res.status(409).json({
        message: "User already",
        error: "User email already exists",
      });
    } else {
      res.status(500).json({
        message: "Internal server error",
        error: error.message,
      });
    }
  }
};

export const loginUser = async (req, res) => {
  console.log(req.body)
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const enteredPasswordHash = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  if (!user || user.password !== enteredPasswordHash) {
    return res.status(404).json({
      message: "Invalid credentials",
    });
  }
  const cookieOptions = JSON.stringify({
    expriationTime: Math.round(Date.now() / 1000 + 100000),
    id: user._id.toString(),
  });
  res.cookie("token", Buffer.from(cookieOptions).toString("base64url"), {
    httpOnly: true,
    signed: true,
    maxAge: 60 * 1000 * 60 * 24 * 7,
  });
  res.status(200).json({
    message: "Login successful",
    userId: user.id,
    rootDirId: user.rootDirId,
  });
};
export const logoutUser = (req, res) => {
  res.clearCookie("userID");
  res.status(200).json({
    message: "Logout successful",
  });
};

export const getUserDetails = (req, res) => {
  res.status(200).json({
    name: req.user.name,
    email: req.user.email,
  });
};

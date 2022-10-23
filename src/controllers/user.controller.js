require("dotenv").config();
import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();
  console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, process.env.SECRET, {
    expiresIn: 86400, //24 hours
  });
  res.status(200).json({ token });
};

export const createUser = (req, res) => {
  res.json("creating user");
};

export const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
};

export const getUserId = async (req, res) => {
  const user = await User.findById(req.params.userId, { password: 0 });
  if (!user) {
    return res.status(404).send("No user found.");
  }
  res.status(200).json(user);
};

export const getUserByRole = async (req, res) => {
  const role = await User.find({ roles: req.params.userRol }, { password: 0 });
  if (!role) {
    return res.status(404).send("No user found.");
  }
  res.status(200).json(role);
};

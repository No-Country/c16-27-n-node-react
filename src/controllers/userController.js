import Users from "../models/user.js";

const find = async (req, res) => {
  const user = await Users.find();
  res.json(user);
};

const findId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findById(id);
    res.json(user);
  } catch (err) {
    res.status(404).json();
    console.log(err);
  }
};

const save = async (req, res) => {
  try {
    const body = req.body;
    const user = new Users(body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json()
    console.log(err);
  }
};

const edit = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findByIdAndUpdate(id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json()
    console.log(err);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Users.findByIdAndDelete(id);
    res.json(user);
  } catch (err) {
    res.status(500).json()
    console.log(err);
  }
};

export default {
  find,
  findId,
  save,
  edit,
  deleteById,
};

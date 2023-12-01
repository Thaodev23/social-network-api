const { Thought } = require('../models');
const Model = Thought; 

async function getAllItems() {
  try {
    return await Model.find();
  } catch (err) {
    return res.status(400).json({ message: 'Unable to find records' });
  }
}

async function getItemById(id) {
  try {
    return await Model.findById({_id: id});
  } catch (err) {
    return res.status(400).json({ message: 'Unable to find item by id' });
  }
}

async function createItem(data) {
  try {
    return await Model.create(data);
  } catch (err) {
    return res.status(400).json({ message: 'Unable to create item' });
  }
}

async function updateItemById(id, data) {
  try {
    return await Model.findByIdAndUpdate(
      { _id: id },
      data,
      { new: true }
    );
  } catch (err) {
    return res.status(400).json({ message: 'Unable to find/update item by id' });
  }
}

async function deleteItemById(id) {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (err) {
    return res.status(400).json({ message: 'Unable to delete item by id' });
  }
}

module.exports = {
  getAllThoughts: getAllItems,
  getThoughtById: getItemById,
  createThought: createItem,
  updateThoughtById: updateItemById,
  deleteThoughtById: deleteItemById
}
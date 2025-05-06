const Group = require("../models/groupModel");

const createGroup = async (req, res) => {
  try {
    const group = new Group(req.body);
    await group.save();
    res.send(group);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGroups = async (req, res) => {
  try {
    const groupId = req.query._groupId;

    const filter = {};
    if (groupId) {
      filter.groupId = groupId;
    }
    const groups = await Group.find(filter);
    res.send(groups);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGroupById = async (req, res) => {
  try {
    const { id } = req.params;
    const group = await Group.findById(id);

    if (!group) {
      return res.status(404).send({ error: "Group Not found" });
    }

    res.send(group);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedGroup = await Group.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedGroup) {
      return res.status(404).send({ error: "Group Not found" });
    }

    res.send(updatedGroup);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteGroup = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedGroup = await Group.findByIdAndDelete(id);

    if (!deletedGroup) {
      return res.status(404).send({ error: "Group Not found" });
    }

    res.send({ message: "Group was removed", data: deletedGroup });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGroupStudents = async (req, res) => {
  try {
    const { groupId } = req.params;
    const group = await Group.findById(groupId).populate("students");

    if (!group) {
      return res.status(404).send({ error: "Group not found" });
    }

    res.send(group.students);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Server error" });
  }
};

module.exports = {
  getGroups,
  getGroupById,
  createGroup,
  updateGroup,
  deleteGroup,
  getGroupStudents,
};

const Activity = require("../models/activityModel");

const createActivity = async (req, res) => {
  try {
    const activity = new Activity(req.body);
    await activity.save();
    res.send(activity);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getActivities = async (req, res) => {
  try {
    const activityId = req.query._eventId;

    const filter = {};
    if (activityId) {
      filter.activityId = activityId;
    }
    const activities = await Activity.find(filter);
    res.send(activities);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getActivityById = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findById(id);

    if (!activity) {
      return res.status(404).send({ error: "Activity Not found" });
    }

    res.send(activity);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateActivity = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedActivity = await Activity.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedActivity) {
      return res.status(404).send({ error: "Activity Not found" });
    }

    res.send(updatedActivity);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedActivity = await Activity.findByIdAndDelete(id);

    if (!deletedActivity) {
      return res.status(404).send({ error: "Activity Not found" });
    }

    res.send({ message: "Activity was removed", data: deletedActivity });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createActivity,
  getActivities,
  getActivityById,
  updateActivity,
  deleteActivity,
};

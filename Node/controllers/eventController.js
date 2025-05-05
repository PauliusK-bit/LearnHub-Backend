const Event = require("../models/eventModel");

const createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getEvents = async (req, res) => {
  try {
    const eventId = req.query._eventId;

    const filter = {};
    if (eventId) {
      filter.eventId = eventId;
    }
    const events = await Event.find(filter);
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).send({ error: "Event Not found" });
    }

    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).send({ error: "Event Not found" });
    }

    res.send(updatedEvent);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).send({ error: "Event Not found" });
    }

    res.send({ message: "Event was removed", data: deletedEvent });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};

const Subject = require("../models/subjectModel");
const Video = require("../models/videoModel");

const createSubject = async (req, res) => {
  try {
    const subject = new Subject(req.body);
    await subject.save();
    res.send(subject);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.send(subjects);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSubjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await Subject.findById(id);

    if (!subject) {
      return res.status(404).send({ error: "Subject Not found" });
    }

    res.send(subject);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedSubject = await Subject.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedSubject) {
      return res.status(404).send({ error: "Subject Not found" });
    }

    res.send(updatedSubject);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSubject = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedSubject = await Subject.findByIdAndDelete(id);

    if (!deletedSubject) {
      return res.status(404).send({ error: "Subject Not found" });
    }

    res.send({ message: "Subject was removed", data: deletedSubject });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSubjectVideos = async (req, res) => {
  try {
    const { subjectId } = req.params;

    const videos = await Video.find({ subjectId: subjectId });

    if (!videos || videos.length === 0) {
      return res
        .status(404)
        .json({ error: "Videos not found for this subject" });
    }

    res.json(videos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
  getSubjectVideos,
};

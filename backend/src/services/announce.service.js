const Announcement = require('../models/announce.model');

// Get all announcements
const getAllAnnouncements = async () => {
  return await Announcement.find().populate('createdBy', 'username email profileImage');
};

// Get a single announcement by ID
const getAnnouncementById = async (id) => {
  return await Announcement.findById(id);
};

// Create a new announcement
const createAnnouncement = async (data) => {
  const newAnnouncement = new Announcement(data);
  return await newAnnouncement.save();
};

// Update an announcement by ID
const updateAnnouncement = async (id, data) => {
  return await Announcement.findByIdAndUpdate(id, data, { new: true });
};

// Delete an announcement by ID
const deleteAnnouncement = async (id) => {
  return await Announcement.findByIdAndDelete(id);
};



module.exports = {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};

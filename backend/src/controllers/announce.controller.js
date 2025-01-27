const announcementsService = require('../services/announce.service');

// Get all announcements
const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await announcementsService.getAllAnnouncements();
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch announcements' });
  }
};

// Get an announcement by ID
const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await announcementsService.getAnnouncementById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the announcement' });
  }
};

// Create a new announcement
const createAnnouncement = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Validate required fields
    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    // Get the user ID from the request (assuming you have authentication middleware)
    const userId = req.user._id;

    // Prepare announcement data
    const announcementData = {
      title,
      description,
      picture: req.file ? `uploads/${req.file.filename}` : undefined, 
      createdBy: userId, // Associate the announcement with the user
    };

    // Create the announcement
    const newAnnouncement = await announcementsService.createAnnouncement(announcementData);

    // Emit real-time update event
    req.io.emit("announcementCreated", newAnnouncement);

    // Return the created announcement
    res.status(201).json(newAnnouncement);
  } catch (error) {
    console.error("Error creating announcement:", error);
    res.status(400).json({ error: 'Failed to create announcement' });
  }
};

// Update an announcement by ID
const updateAnnouncement = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Prepare announcement data
    const announcementData = {
      title,
      description,
      picture: req.file ? `uploads/${req.file.filename}` : req.body.picture,
    };

    const updatedAnnouncement = await announcementsService.updateAnnouncement(req.params.id, announcementData);

    if (!updatedAnnouncement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }

    // Emit real-time update event
    req.io.emit("announcementUpdated", updatedAnnouncement);

    // Return the updated announcement
    res.status(200).json(updatedAnnouncement);
  } catch (error) {
    console.error("Error updating announcement:", error);
    res.status(400).json({ error: 'Failed to update announcement' });
  }
};

// Delete an announcement by ID
const deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await announcementsService.deleteAnnouncement(req.params.id);
    if (!announcement) {
      return res.status(404).json({ error: 'Announcement not found' });
    }
    // Emit event for real-time update
    req.io.emit("announcementDeleted", req.params.id); 
    res.status(200).json({ message: 'Announcement deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete announcement' });
  }
};

module.exports = {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};

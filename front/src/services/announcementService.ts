// services/announcementService.ts
import { Announcement } from "../types/announcement.ts";

const API_URL = 'http://localhost:8083/api/announce';

const announcementService = {
  getAnnouncements: async (): Promise<Announcement[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch announcements');
    }
    return response.json();
  },

  createAnnouncement: async (announcement: { title: string , description: string}): Promise<Announcement> => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(announcement),
    });
    if (!response.ok) {
      throw new Error('Failed to create announcement');
    }
    return response.json();
  },
};

export default announcementService;
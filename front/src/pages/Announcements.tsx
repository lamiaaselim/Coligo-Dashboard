// pages/Announcements.tsx
import React, { useState, useEffect } from 'react';
import AnnouncementList from '../components/AnnouncementList.tsx';
import announcementService from '../services/announcementService.ts';
import { Announcement } from '../types/announcement.ts';

const Announcements: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const data = await announcementService.getAnnouncements();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  return (
    <div className='py-5 px-5' style={{ background: "#fff" }}>
      <h1> Announcements </h1>
      <p className='text-muted'>here's announce that it's important </p>
      <AnnouncementList announcements={announcements} />
    </div>
  );
};

export default Announcements;
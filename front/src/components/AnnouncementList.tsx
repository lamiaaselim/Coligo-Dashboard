// components/AnnouncementList.tsx
import React from 'react';
import { Announcement } from '../types/announcement';

interface AnnouncementListProps {
  announcements: Announcement[];
}

const AnnouncementList: React.FC<AnnouncementListProps> = ({ announcements }) => {
  return (
    <div className="row">
      {announcements.map((announcement) => (
        <div key={announcement._id} className="mb-4">
          <div className="card mb-3 border-0">
            <div className="row g-0">
              <div className="col-md-2 d-flex flex-column align-items-center justify-content-center p-3">
                <img
                  src={`http://localhost:8083/api/${announcement.createdBy.profileImage}`}
                  className="img-fluid rounded-circle border"
                  alt={announcement.title}
                  style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-3 d-flex flex-column justify-content-center p-3">
                <p className="mt-2 mb-0 text-center">{announcement.createdBy.username}</p>
                <p className="card-text text-center">
                  <small className="text-body-secondary">
                    Posted on: {new Date(announcement.createdAt).toLocaleString()}
                  </small>
                </p>
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">{announcement.title}</h5>
                  <p className="card-text">{announcement.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementList;
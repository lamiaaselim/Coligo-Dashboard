// types/announcements.ts
export interface Announcement {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
  createdBy: {
    username: string;
    email: string;
    profileImage: string;
  };
}

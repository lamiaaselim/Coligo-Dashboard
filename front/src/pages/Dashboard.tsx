// pages/Dashboard.tsx
import React from "react";
import Announcements from "./Announcements.tsx";
import Quizzes from "./Quizzes.tsx";
import Banner from "./Banner.tsx";
import MySidebar from "../components/Sidebar.tsx";
import AppNavbar from "../components/MyNav.tsx";
import Footer from "./../components/Footer.tsx";

const Dashboard: React.FC = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar Section (Left) */}
        <div className="col-md-2 p-0">
          <MySidebar />
        </div>

        {/* Main Content Section (Right) */}
        <div className="col-md-10 p-0">
          {/* Navbar Section */}
          <div className="row g-0">
            <AppNavbar />
          </div>

          {/* Banner Section */}
          <div className="dashboard-banner">
            <Banner />
          </div>

          {/* Announcements and Quizzes Section */}
          <div className="dashboard-content p-3">
            <div className="row">
              {/* Announcements Section */}
              <div className="col-md-8">
                <Announcements />
              </div>

              {/* Quizzes Section */}
              <div className="col-md-4">
                <Quizzes />
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="row g-0">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
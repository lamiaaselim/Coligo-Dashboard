// pages/Banner.tsx
import React from "react";

export default function Banner() {
  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="row g-0">
          {/* Left Column - Content */}
          <div className="col-md-8 p-4">
            <div className="card-body">
              <h1 className="text-green-gradient card-title display-4 fw-bold mb-4">EXAMS TIME</h1>
              <p className="card-text lead mb-4">
                Have we are, Are you ready to fight? Don't worry, we prepared
                some tips to be ready for your exams.
              </p>
              <div className="mt-4">
                <p className="text-muted">
                  we prepared some tips to be ready for your exams.
                </p>
                <button type="button" className="btn btn-lg btn-green">
                  {" "}
                  View Exam Tips{" "}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-4">
            <img
              src="./images/home-banner.avif"
              alt="Exam Preparation"
              className="img-fluid rounded-end h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

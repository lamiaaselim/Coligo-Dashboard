// pages/Home.tsx
import React from 'react';


const NotFound: React.FC = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="d-flex justify-content-center">
            <img src="./images/404-error-dribbble.gif" alt="not-found-page-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
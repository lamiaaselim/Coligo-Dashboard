// components/Layout.tsx
import React from 'react';

// import AppNavbar from '../components/MyNav.tsx';
// import Footer from '../components/Footer.tsx';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <div className="">{children}</div>
      
    </>
  );
};

export default Layout;
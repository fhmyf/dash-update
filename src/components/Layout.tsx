import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <Sidebar />
      <TopBar />
      <main className="ml-20 pt-16 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
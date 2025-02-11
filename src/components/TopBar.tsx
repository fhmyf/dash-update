import React from 'react';
import { Bell, User, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const TopBar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-16 bg-navy-800 flex items-center justify-between px-6 fixed top-0 right-0 left-20 z-10">
      <div className="text-white text-xl font-semibold">
        Sensor Monitoring System
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        
        <button className="text-gray-300 hover:text-white">
          <HelpCircle size={20} />
        </button>
        
        <div className="flex items-center space-x-2 text-gray-300">
          <User size={20} />
          <span>{user?.name || 'Admin'}</span>
        </div>

        <button 
          onClick={logout}
          className="text-gray-300 hover:text-white ml-4"
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
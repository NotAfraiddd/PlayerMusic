import React from 'react';
import './Sidebar.css';
import BaseImage from '../BaseImage';
import SidebarButton from './SidebarButton';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
export default function Sidebar() {
  const linkAvtar = `https://i.pinimg.com/564x/9f/a5/98/9fa598830ffc1e8ae304064fcb781e31.jpg`;
  return (
    <div className="sidebar-container mx-1 h-full flex flex-col items-center justify-between">
      <BaseImage src={linkAvtar} className={`object-cover`} />
      <div className="min-w-[100px]">
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />} />
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlay />} />
        <SidebarButton title="Favorite" to="/favorite" icon={<MdFavorite />} />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}

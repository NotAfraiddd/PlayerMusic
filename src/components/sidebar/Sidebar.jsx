import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import BaseImage from '../BaseImage';
import SidebarButton from './SidebarButton';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import apiClient from '../../apis/spotify';
export default function Sidebar() {
  const [image, setImage] = useState();
  useEffect(() => {
    apiClient.get('me').then((res) => {
      setImage(res?.data?.images[1]?.url);
    });
  });
  return (
    <div className="sidebar-container mx-1 h-full flex flex-col items-center justify-between">
      <BaseImage src={image} className={`object-cover`} />
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

import React from 'react';
import './SidebarButton.css';
import { Link } from 'react-router-dom';
export default function SidebarButton({ title, to, icon }) {
  console.log(icon);
  return (
    <Link to={to} className="">
      {icon}
      <span>{title}</span>
    </Link>
  );
}

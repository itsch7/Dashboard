import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {Link}  from "react-router-dom"
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
       <Link to ="/" style={{textDecoration: "none"}}> <span className="logo">Ch Admin</span></Link>
      </div>{" "}
      <hr></hr>
      <div className="list">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/" style={{textDecoration: "none"}}><DashboardIcon className="icon" /> <span> Dashboard </span></Link>
          </li>
          <p className="title">LISTS</p>
          <li>
           <Link to ="/users" style={{textDecoration: "none"}}> <PersonOutlineOutlinedIcon className="icon" /> <span> Users </span></Link>
          </li>
          <li>
            <ViewStreamOutlinedIcon className="icon" /> <span> Orders </span>
          </li>

          <li>
          <Link to ="/products" style={{textDecoration: "none"}}> <Inventory2OutlinedIcon className="icon" /> <span> Products </span></Link>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" />{" "}
            <span> Delivery </span>
          </li>

          <li>
            <AssessmentOutlinedIcon className="icon" /> <span> Stats </span>
          </li>
          <p className="title">SERVICE</p>

          <li>
            <NotificationsActiveOutlinedIcon className="icon" />{" "}
            <span> Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />{" "}
            <span> System Health </span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" /> <span> Logs </span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" /> <span> Settings </span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" /> <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" /> <span>Logout</span>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className="color">
      

        <div className="mode"></div>
        <div className="mode"></div>

      </div>
    </div>
  );
}

export default Sidebar;

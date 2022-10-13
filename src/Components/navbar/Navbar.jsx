import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="search" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items-list">
          <div className="items">
            {" "}
            <LanguageOutlinedIcon className="icons" /> <span> English </span>     
          </div>
          <div className="items">
            {" "}
            <DarkModeOutlinedIcon className="icons"/>
          </div>
          <div className="items">
            {" "}
            <FullscreenExitOutlinedIcon className="icons"/>
          </div>
          <div className="items">
            {" "}
            <NotificationsOutlinedIcon className="icons"/>{" "}
            <div className="counter">1</div>

          </div>
          <div className="items">
            {" "}
            <ChatBubbleOutlineOutlinedIcon className="icons"/>
            <div className="counter">2</div>
          </div>
          <div className="items">
            {" "}
            <FormatListBulletedOutlinedIcon className="icons"/>
          </div>
          <div className="items">
            {" "}
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=2000" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

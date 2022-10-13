import React from "react";
import "./widgets.scss";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import { blue, red } from "@mui/material/colors";

const Widgets = ({ type }) => {
  var data;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "Users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineOutlinedIcon className="icon" style ={{color: "purple", backgroundColor: "#ffd230c7",}}/>,
      };
      break;
    case "Orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ViewStreamOutlinedIcon className="icon" style ={{color: "purple", backgroundColor: "#ffd230c7",}}/>,
      };
      break;
    case "Earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net money",
        icon: <PaidOutlinedIcon className="icon" style ={{color: "purple", backgroundColor: "#ffd230c7",}} />,
      };
      break;
    case "Balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See all Details",
        icon: <AccountBalanceOutlinedIcon className="icon" style ={{color: "purple", backgroundColor: "#ffd230c7",}} />,
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="counter">
          {data.isMoney && "$"}
          {amount}
        </div>
        <div className="link">{data.link}</div>
      </div>
      <div className="right">
        <div className="percentage negative">
          {" "}
          {diff} <KeyboardArrowUpIcon />
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widgets;

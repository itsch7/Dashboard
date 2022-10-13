import React from "react";
import "./home.scss";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebars/Sidebar";
import Widgets from "../../Components/widgets/Widgets";
import Charts from "../../Components/Charts/Charts";
import Featured from "../../Components/featured/Featured";
import Table from "../../Components/Table/Table";

const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <div className="homecontainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="Users" />
          <Widgets type="Orders" />
          <Widgets type="Earnings" />
          <Widgets type="Balance" />
        </div>
        <div className="charts">
          <Featured />
          <Charts  />

        </div>
        <div className="listContainer">
          <div className="listTitle"> Latest Transaction</div>
          <Table  />
        </div>
      </div>
    </div>
  );
};

export default Home;

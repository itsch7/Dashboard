import "./App.css";
import ReactDOM from "react-dom/client";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
// import Navbar from "./Components/navbar/Navbar";
// import Sidebar from "./Components/sidebars/Sidebar";
import Datatable from "./Components/Datatabl/Datatable";
// import "./style/style.scss"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "./formsource";


function App() {
  return (
    <div className="app dark">
     
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
            <Route index element={<List title2 ="Add User" title ="Add new User" />} />
            <Route path="new" element={<New  inputs ={userInputs} title ="Add New User" />} />
            <Route path=":userId" element={<Single />} />
            
            </Route>
            <Route path="products">
            <Route index element={<List title2="Add Product" title ="Add new Product" />} />
            <Route path="new" element={<New inputs ={productInputs} title ="Add New Product"  />} />
            <Route path=":productId" element={<Single />} />
            
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

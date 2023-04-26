import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import FexriMezunlar from "../pages/aboutPage/fexriMezunlar";
import FexriDoktorlar from "../pages/aboutPage/fexriDoktorlar";
import Suralar from "../pages/aboutPage/suralar";
import Qehremanlarimiz from "../pages/aboutPage/qehremanlarimiz";
import Rektor from "../pages/aboutPage/rektor";
import ProRektorlar from "../pages/aboutPage/proRektorlar";
import SabiqRektorlar from "../pages/aboutPage/sabiqRektorlar";
import Strategiya from "../pages/aboutPage/strategiya";
import BlogPage from "../pages/blogPage";
import DashBoard from "../pages/admin/dashboard";
import Bar from "../assets/components/bar";
import LoginPage from "../pages/loginPage";

const Router = () => {
  return (
    <>
      <Header />
      <Bar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/fexriDoktorlar" element={<FexriDoktorlar />}></Route>
        <Route path="/fexriMezunlar" element={<FexriMezunlar />}></Route>
        <Route path="/suralar" element={<Suralar />}></Route>
        <Route path="/qehremanlarimiz" element={<Qehremanlarimiz />}></Route>
        <Route path="/rektor" element={<Rektor />}></Route>
        <Route path="/prorektorlar" element={<ProRektorlar />}></Route>
        <Route path="/sabiqRektorlar" element={<SabiqRektorlar />}></Route>
        <Route path="/strategiya" element={<Strategiya />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/adminPanel" element={<DashBoard />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Router;

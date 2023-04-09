import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import DetailPage from "../pages/detailsPage";
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

const Router = () => {
  return (
    <>
      <Header />
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
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Router;

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage";
import DetailPage from "../pages/detailsPage";
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import AboutPage from "../pages/aboutPage";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/detail/:id" element={<DetailPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default Router;

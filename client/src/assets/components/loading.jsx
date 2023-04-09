import React from "react";
import loadingImage from "../images/loading.svg";
import "./index.scss";

const Loading = () => {
  return (
    <div id="loading">
      <img src={loadingImage} alt="loading" />
    </div>
  );
};

export default Loading;

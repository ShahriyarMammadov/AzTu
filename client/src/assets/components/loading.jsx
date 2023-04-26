import React from "react";
import loadingImage from "../images/loading.svg";
import "./index.scss";

const Loading = () => {
  return (
    <div id="loading">
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default Loading;

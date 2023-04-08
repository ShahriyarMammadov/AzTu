import React, { useEffect, useState } from "react";
import "./index.scss";
import { Tabs } from "antd";
import axios from "axios";

const AboutPage = () => {
  const [keyEndPoint, setKeyEndPoint] = useState("fexriDoktorlar");
  const [doktorlar, setDoktorlar] = useState([]);
  const [qehremanlarimiz, setQehremanlarimiz] = useState([]);
  const [sabiqRektorlarimiz, setSabiqRektorlarimiz] = useState([]);
  const [prorektorlar, setprorektorlar] = useState([]);
  const [fexriMezunlar, setFexriMezunlar] = useState([]);

  const getData = async () => {
    if (doktorlar == []) {
      let response = await axios.get(`http://localhost:3000/${keyEndPoint}`);

      if (keyEndPoint === "fexriDoktorlar") {
        setDoktorlar(response.data);
      } else if (keyEndPoint === "qehremanlarimiz") {
        setQehremanlarimiz(response.data);
      } else if (keyEndPoint === "fexriMezunlar") {
        setFexriMezunlar(response.data);
      } else if (keyEndPoint === "prorektorlar") {
        setprorektorlar(response.data);
      } else if (keyEndPoint === "sabiqRektorlarimiz") {
        setSabiqRektorlarimiz(response.data);
      } else {
        null;
      }
    } else {
      return "doktorlar";
    }
  };
  console.log("doktorlar", doktorlar);
  console.log("mezun", fexriMezunlar);
  console.log("qehremanlar", qehremanlarimiz);
  console.log("prorektor", prorektorlar);
  console.log("rektorlar", sabiqRektorlarimiz);

  useEffect(() => {
    getData();
  }, [keyEndPoint]);

  const onChange = (key) => {
    if (key !== "strategiya" && key !== "suralar" && key !== "rektor") {
      console.log(key);
      setKeyEndPoint(key);
    } else {
      null;
    }
  };

  const items = [
    {
      key: "fexriDoktorlar",
      label: `Fəxri Doktorlarımız`,
      children: `database-den gelmelidi`,
    },
    {
      key: "fexriMezunlar",
      label: `Fəxri Məzunlarımız`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "qehremanlarimiz",
      label: `Qəhrəmanlarımız`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "strategiya",
      label: `Strategiya`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "rektor",
      label: `Rektor`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "prorektorlar",
      label: `Prorektorlar`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "sabiqRektorlarimiz",
      label: `Sabiq Rektorlarımız`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "suralar",
      label: `Şuralar`,
      children: `Content of Tab Pane 3`,
    },
  ];

  return (
    <div id="about">
      <div className="about">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ color: "white", textAlign: "center" }}
        />
      </div>
    </div>
  );
};

export default AboutPage;

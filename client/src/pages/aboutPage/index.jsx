import React from "react";
import "./index.scss";
import { Tabs } from "antd";

const AboutPage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Fəxri Doktorlarımız`,
      children: `database-den gelmelidi`,
    },
    {
      key: "2",
      label: `Fəxri Məzunlarımız`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Qəhrəmanlarımız`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "4",
      label: `Strategiya`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "5",
      label: `Rektor`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "6",
      label: `Prorektorlar`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "7",
      label: `Sabiq Rektorlarımız`,
      children: `Content of Tab Pane 3`,
    },
    {
      key: "8",
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

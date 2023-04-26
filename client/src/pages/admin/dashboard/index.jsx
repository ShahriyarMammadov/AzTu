import React, { useEffect, useState } from "react";
import "./index.scss";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/",
          {},
          {
            withCredentials: true,
          }
        );

        if (!data?.status) {
          removeCookie("jwt");
          navigate("/login");
        } else {
          navigate("/adminPanel");
        }
      }
    };

    verifyUser();
  }, [cookies, removeCookie, navigate]);

  //----------------------------

  const [blogName, setBlogName] = useState("");
  const [blogText, setBlogText] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [blogİmage, setBlogİmage] = useState("");
  const [feedBack, setFeedBack] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Sending...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Added, Thank you Admin",
        duration: 2,
      });
    }, 1000);
  };

  // image convert to base64 and send database
  function handleFileInputChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result;
      setBlogİmage(base64String);
    };
  }

  //------------------------------
  const addedData = async () => {
    try {
      setFeedBack(true);
      await axios.post(`http://localhost:3000/added/blogData`, {
        blogName: blogName,
        blogText: blogText,
        expiredDate: expiredDate,
        blogImage: blogİmage,
      });
      setFeedBack(false);
    } catch (error) {
      console.log(error);
      setFeedBack(false);
    }
  };

  if (feedBack) {
    openMessage();
  }

  return (
    <div id="dashBoard">
      {contextHolder}
      <div className="dashBoard">
        <div className="head">
          <h1>Add Blog News</h1>
        </div>

        <div className="addedData">
          <Form
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="horizontal"
            initialValues={{
              size: "large",
            }}
            size={"large"}
            style={{
              maxWidth: 600,
            }}
          >
            <Form.Item label="Blog Name" required={true}>
              <Input
                onChange={(e) => {
                  setBlogName(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item label="Blog Text" required={true}>
              <textarea
                style={{ width: "100%", height: "20vh" }}
                onChange={(e) => {
                  setBlogText(e.target.value);
                }}
              />
            </Form.Item>

            <div className="image">
              <input type="file" onChange={handleFileInputChange} />
            </div>

            <Form.Item label="DatePicker" required={true}>
              <input
                type="date"
                onSelect={(e) => {
                  setExpiredDate(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item>
              <Button onClick={addedData}>Added</Button>
            </Form.Item>
          </Form>
        </div>
        <button
          class="button-85"
          role="button"
          onClick={() => {
            removeCookie("jwt");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashBoard;

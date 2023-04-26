import React, { useState } from "react";
import "./index.scss";
import image from "../../assets/images/loginImage.jpeg";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const key = "updatable";

  const openMessageEmail = () => {
    setTimeout(() => {
      messageApi.open({
        key,
        type: "error",
        content: "Email is inCorrect",
        duration: 2,
      });
    }, 1000);
  };

  const openMessagePassword = () => {
    setTimeout(() => {
      messageApi.open({
        key,
        type: "error",
        content: "Password is inCorrect",
        duration: 2,
      });
    }, 1000);
  };

  const navigate = useNavigate();

  const handleLoginAuth = async () => {
    try {
      setLoading(true);
      let { data } = await axios.post(
        "http://localhost:3000/login",
        { email: email, password: password },
        {
          withCredentials: true,
        }
      );
      console.log(data);
      setLoading(false);
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) {
            openMessageEmail();
          } else if (password) {
            openMessagePassword();
          }
        } else {
          navigate("/adminPanel");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="login">
      {contextHolder}
      <div className="login">
        <div className="left">
          <img src={image} alt="" />
        </div>
        <div className="right">
          {" "}
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                onClick={handleLoginAuth}
              >
                {loading ? "..........." : "Login"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

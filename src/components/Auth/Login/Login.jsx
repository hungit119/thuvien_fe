import React from "react";
import "./Login.css";
import { Button, Checkbox, Form, Input } from "antd";
import {toast} from "react-toastify"
import axios from "axios";
import setAuthToken from "../../../utils/setAuthToken";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../context.";

const Login = () => {
  const navigate = useNavigate()
  const {setUser} = useGlobalContext()
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:3333/auth/login",{
        username:values.username,
        password:values.password
      })
      if (response.data) {
        toast.success(response.data.message);
        localStorage.setItem("ACCESS_TOKEN",response.data.result.accessToken)
        setUser({
          isLogin:true,
          info:response.data.result.user
        })
        localStorage.setItem("userId",response.data.result.user.id)
        setAuthToken(response.data.result.accessToken)
        navigate("/")
      }
      
    } catch (error) {
      
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="shadow-2xl">
      <div className="container-login">
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
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input size="large" />
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
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button size="large" type="primary" ghost htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

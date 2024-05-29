import React, { useState, useContext } from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message, Select } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const AuthPage = () => {
  const { login } = useContext(AuthContext);
  const [view, setView] = useState("login");
  const [animation, setAnimation] = useState("");
  const [userType, setUserType] = useState("");

  const onFinishHandler = async (values, url) => {
    try {
      const res = await axios.post(`http://localhost:8080/api/v1/${url}`, values);
      if (res.data.success) {
        message.success(`${url.charAt(0).toUpperCase() + url.slice(1)} Successfully!`);
        if (url === "login") {
          login(res.data.token);
        } else {
          setAnimation("slide-out-right");
          setTimeout(() => {
            setView("login");
            setAnimation("slide-in-left");
          }, 600);
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something went wrong");
    }
  };

  const handleUserTypeChange = (value) => {
    setUserType(value);
  };

  const handleSwitchToRegister = () => {
    setAnimation("slide-out-right");
    setTimeout(() => {
      setView("register");
      setAnimation("slide-in-left");
    }, 600);
  };

  const handleSwitchToLogin = () => {
    setAnimation("slide-out-right");
    setTimeout(() => {
      setView("login");
      setAnimation("slide-in-left");
    }, 600);
  };

  return (
    <div className="auth-page">
      <div className="auth-image"></div>
      <div className={`auth-form-container ${animation}`}>
        {view === "login" ? (
          <Form
            layout="vertical"
            onFinish={(values) => onFinishHandler(values, "login")}
            className="auth-form"
          >
            <h3 className="text-center">Login Form</h3>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input type="password" />
            </Form.Item>
            <Link to="#" className="m-2" onClick={handleSwitchToRegister}>
              Not a user? Register here
            </Link>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </Form>
        ) : (
          <Form
            layout="vertical"
            onFinish={(values) => onFinishHandler(values, "register")}
            className="auth-form"
          >
            <h3 className="text-center">Register Form</h3>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
              <Input type="text" />
            </Form.Item>
            <Form.Item label="User Type" name="userType" rules={[{ required: true, message: 'Please select your user type!' }]}>
              <Select onChange={handleUserTypeChange}>
                <Select.Option value="paciente">Paciente</Select.Option>
                <Select.Option value="doctor">Doctor</Select.Option>
              </Select>
            </Form.Item>
            {userType === "doctor" && (
              <Form.Item label="Speciality" name="speciality" rules={[{ required: true, message: 'Please input your speciality!' }]}>
                <Input type="text" />
              </Form.Item>
            )}
            <Form.Item label="Photo" name="photo" rules={[{ required: true, message: 'Please input your photo URL!' }]}>
              <Input type="text" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input type="password" />
            </Form.Item>
            <Link to="#" className="m-2" onClick={handleSwitchToLogin}>
              Already a user? Login here
            </Link>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;

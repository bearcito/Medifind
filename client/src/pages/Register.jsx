import React, { useState } from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message, Select } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");

  // Form handler
  const onFinishHandler = async (values) => {
    console.log(values);
    try {
      const res = await axios.post("http://localhost:8080/api/v1/register", values);
      console.log(res);
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  // Handle user type change
  const handleUserTypeChange = (value) => {
    setUserType(value);
  };

  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onFinishHandler} className="register-form">
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
          <Link to="/login" className="m-2">
            Already a user? Login here
          </Link>
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;

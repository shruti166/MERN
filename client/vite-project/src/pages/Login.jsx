import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import "./auth.css";
import { LoginUser } from "../apiCalls/user";

export default function Login() {

  const onSubmit = async(value) => {
    try {
      const response = await LoginUser(value);
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div >
      <Form
        layout="vertical"
        name="basic"
        className="form-input"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
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
          <Input.Password />
        </Form.Item>

        <Link to="/register">New User ? </Link>

        <Form.Item label={null} >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

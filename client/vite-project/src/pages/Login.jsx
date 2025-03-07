import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  return <div><Form
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
  
  autoComplete="off"
>
   <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
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
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
  
  <Link to ="/register">New User ? </Link>

  

  <Form.Item label={null}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form></div>;
}

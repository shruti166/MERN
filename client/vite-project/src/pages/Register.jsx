import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

export default function Register() {
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
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
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
      <Link to ="/login">Already have an account? Login Here </Link>
  

  <Form.Item label={null}>
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form></div>;
}

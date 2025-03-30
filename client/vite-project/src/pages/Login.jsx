import React from "react";
import { Button, Form, Input, message } from "antd";
import {Link} from 'react-router-dom'
import { LoginUser } from "../apiCalls/user";
import { useNavigate } from "react-router-dom";


function Login() {

  const navigate = useNavigate()
  
  const onFinish = async (values)=>{
    try {
      const respone = await LoginUser(values)
      console.log(respone)
      if(respone.success){
        localStorage.setItem("token", respone.token)
        message.success(respone.message)
        navigate('/home')

       }
      else{
        message.error(respone.message)
      }

    } catch (error) {
      message.error(error)
    }
  }


  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="title">Login to MovieBook</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item 
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" placeholder="Enter your email" className="input-field"/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input type="password" placeholder="Enter your password" className="input-field"/>
          </Form.Item>

          <Button type="primary" block htmlType="submit" className="auth-button">
            Login
          </Button>
        </Form>
        <p className="switch-text">
          New User? <Link to='/register'>Regsiter here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
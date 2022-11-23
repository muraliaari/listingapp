import React from 'react'
import { Button, Form, Input } from 'antd';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Success:', values);
        console.log(values);
        //api calls here
        axios.post("http://rustycoder.live:8181/auth/signup",values).then(response=>{
          console.log(response.data);
          navigate("/listing")
        }).catch(err=>{
          console.log(err)
        })


      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop:"-600px"
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
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
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            SignUp
          </Button>
        </Form.Item>
      </Form>
  
    </div>
  )
}

export default Signup
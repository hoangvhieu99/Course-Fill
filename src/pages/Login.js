import React from "react";
import { Button, Form, Input, notification  } from 'antd';
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log(values);
    const {username, password} = values
    if(username === 'admin' && password === '123456'){
      notification.open({ 
        message: 'Đăng nhập thành công', 
        description: 
          'Đang chuyển tới trang chủ', 
      }); 
      navigate("/")
    }
  };
  const onFinishFailed = (errorInfo) => {
    const {username, password} = errorInfo
    if(username !== 'admin' && password !== '123456'){
      notification.open({ 
        message: 'Đăng nhập thất bại', 
        description: 
          'Sai tài khoản hoặc mật khẩu', 
      }); 
    }
  };
  return (
    <div className="login-body">
      <div className="container">
        <Form name="basic" labelCol={{span: 8,}}
            wrapperCol={{
              span: 16,
            }}
            className="form-login"
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

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" >
                Submit
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  )
}

export default Login
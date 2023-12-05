import React from "react";
import { useData } from "../context/AppContext";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
} from "antd";
import { Link } from "react-router-dom/cjs/react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

const SignIn = () => {
  const { handleLogin } = useData()

  return (
    <>
      <Layout className="layout-default layout-signin">
        <Content className="signin" style={{ minHeight: "100vh" }}>
          <Row justify="space-around">
            <Col style={{ marginTop: "50px", width: "400px" }}>
              <Title className="text-center">Đăng nhập</Title>
              <Form
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Tài khoản"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập email của bạn",
                    },
                  ]}
                >
                  <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Mật khẩu"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập password của bạn",
                    },
                  ]}
                >
                  <Input type="password" placeholder="Password" style={{ fontWeight: 400, color: "black" }} />
                </Form.Item>
                <Form.Item>
                <div>Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link></div>
                <br/>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    onClick={() => handleLogin(
                      document.getElementById('email').value,
                      document.getElementById('password').value,
                    )}
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default SignIn

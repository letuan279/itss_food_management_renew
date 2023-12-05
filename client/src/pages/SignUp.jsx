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
  const { handleRegister } = useData()

  return (
    <>
      <Layout className="layout-default layout-signin">
        <Content className="signin" style={{ minHeight: "100vh" }}>
          <Row justify="space-around">
            <Col style={{ marginTop: "50px", width: "350px" }}>
              <Title className="text-center">Đăng ký</Title>
              <Form
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Tên"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập tên của bạn",
                    },
                  ]}
                >
                  <Input placeholder="Name" />
                </Form.Item>

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
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập password của bạn",
                    },
                  ]}
                >
                  <Input type="password" placeholder="Password" style={{ fontWeight: 400, color: "black" }} />
                </Form.Item>
                <Form.Item
                  className="username"
                  label="Nhập lại mật khẩu"
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
                  <div>Bạn đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link></div>
                  <br />
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    onClick={() => handleRegister(
                      document.getElementById('name').value,
                      document.getElementById('email').value,
                      document.getElementById('password').value,
                      document.getElementById('confirmPassword').value,
                    )}
                  >
                    Đăng ký
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

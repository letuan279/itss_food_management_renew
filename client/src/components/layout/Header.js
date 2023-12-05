import { useEffect } from "react";

import {
  Row,
  Col,
  Breadcrumb,
  Dropdown,
  Button,
  List,
  Tag
} from "antd";

import { NavLink, useHistory } from "react-router-dom";

import { useData } from "../../context/AppContext";

const bell = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    {/* <path
      d="M10 2C6.68632 2 4.00003 4.68629 4.00003 8V11.5858L3.29292 12.2929C3.00692 12.5789 2.92137 13.009 3.07615 13.3827C3.23093 13.7564 3.59557 14 4.00003 14H16C16.4045 14 16.7691 13.7564 16.9239 13.3827C17.0787 13.009 16.9931 12.5789 16.7071 12.2929L16 11.5858V8C16 4.68629 13.3137 2 10 2Z"
      fill="#111827"
    ></path>
    <path
      d="M10 18C8.34315 18 7 16.6569 7 15H13C13 16.6569 11.6569 18 10 18Z"
      fill="#111827"
    ></path> */}
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 14L5 9H15L10 14Z" fill="#111827" />
    </svg>
  </svg>,
];

const profile = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z"
      fill="#111827"
    ></path>
  </svg>,
];

function Header({
  placement,
  name,
  subName,
  onPress,
  handleSidenavColor,
  handleSidenavType,
  handleFixedNavbar,
}) {
  useEffect(() => window.scrollTo(0, 0));

  const namePage = (input) => {
    if (input === "nhom") return "Danh sách nhóm"
    if (input.includes("nhom/")) return "Chi tiết nhóm"
    if (input === "di-cho") return "Đi chợ"
    if (input === "nau-an") return "Nấu ăn"
    if (input === "kho") return "Kho"
    if (input === "cong-thuc") return "Công thức nấu ăn"
    if (input === "mon-do") return "Cài đặt món đồ"
    if (input === "quan-tri") return "Quản trị tài khoản"
    else return "Not found"
  }

  const { user, setUser } = useData()
  const history = useHistory()

  const handleLogout = () => {
    setUser(null)
    history.push("/login")
  }

  const data = [
    {
      title: "",
      description: <Button style={{ width: "100%", backgroundColor: "red", color: "white" }} onClick={handleLogout} >Đăng xuất</Button>,
    }
  ];

  const menu = (
    <List
      min-width="50%"
      className="header-notifications-dropdown "
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb>
            <Breadcrumb.Item>
              <NavLink to="/">FM</NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item style={{ textTransform: "capitalize" }}>
              {namePage(name)}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {namePage(subName)}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              href="#pablo"
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {bell}
            </a>
          </Dropdown>
          <div className="btn-sign-in">
            {profile}
            <span>{user?.username}</span>
          </div>

          {user?.role === 1 &&
            <Tag color="green" >Quản trị viên</Tag>
          }
          {user?.role === 0 &&
            <Tag color="orange" >Người dùng</Tag>
          }
        </Col>
      </Row>
    </>
  );
}

export default Header;

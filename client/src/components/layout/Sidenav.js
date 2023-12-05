import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Sidenav({ color }) {
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  const dashboard = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z"
        fill={color}
      ></path>
      <path
        d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z"
        fill={color}
      ></path>
      <path
        d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z"
        fill={color}
      ></path>
    </svg>,
  ];

  // const { user } = useData()
  const user = [{
    username: "Tuan",
    role: 1
  }]

  return (
    <>
      <div className="brand">
        <img src={logo} alt="" />
        <span style={{ marginLeft: "8px", fontWeight: 800 }}>Food Management</span>
      </div>
      <hr />
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <NavLink to="/nhom">
            <span
              className="icon"
              style={{
                background: page === "nhom" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Nhóm</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="2">
          <NavLink to="/di-cho">
            <span
              className="icon"
              style={{
                background: page === "di-cho" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Đi chợ</span>
          </NavLink>
        </Menu.Item>



        <Menu.Item key="4">
          <NavLink to="/kho">
            <span
              className="icon"
              style={{
                background: page === "kho" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Kho</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="5">
          <NavLink to="/cong-thuc">
            <span
              className="icon"
              style={{
                background: page === "cong-thuc" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Công thức nấu ăn</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="3">
          <NavLink to="/nau-an">
            <span
              className="icon"
              style={{
                background: page === "nau-an" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Nấu ăn</span>
          </NavLink>
        </Menu.Item>


        <Menu.Item key="6">
          <NavLink to="/mon-do">
            <span
              className="icon"
              style={{
                background: page === "mon-do" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Món đồ</span>
          </NavLink>
        </Menu.Item>
        {/* {user[0].role === 1 && <Menu.Item key="7">
          <NavLink to="/quan-tri">
            <span
              className="icon"
              style={{
                background: page === "quan-tri" ? color : "",
              }}
            >
              {dashboard}
            </span>
            <span className="label">Quản trị</span>
          </NavLink>
        </Menu.Item>} */}
      </Menu>
    </>
  );
}

export default Sidenav;

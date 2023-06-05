import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useGlobalContext } from "../../context.";
import { toast } from "react-toastify";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const { user, setUser } = useGlobalContext();
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: (
        <Link
          to="admin/listuser"
          className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
        >
          Quản lí tài khoản
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          to="admin/listbook"
          className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
        >
          Quản lí sách
        </Link>
      ),
    },
  ];
  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <img src={logoImg} alt="site logo" />
            <span className="text-uppercase fw-7 fs-24 ls-1">Libbook</span>
          </Link>
          <button
            type="button"
            className="navbar-toggler-btn"
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3
              size={35}
              style={{
                color: `${toggleMenu ? "#fff" : "#010101"}`,
              }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar-collapse show-navbar-collapse"
              : "navbar-collapse"
          }
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="book"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Tổng quát
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="borrowlistbook"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                to="borrowlistbook"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Sách mượn
              </Link>
            </li>
            {user.isLogin ? (
              <>
                <li className="nav-item">{user?.info.username}</li>
                <li
                  className="nav-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    localStorage.clear();
                    toast.success("Logout");
                    navigate("/login");
                    setUser({
                      isLogin: false,
                      info: {},
                    });
                  }}
                >
                  Logout
                </li>
                {user.info.role === 1 && (
                  <li className="nav-item">
                    <Link
                      to="manage/phieumuon"
                      className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                    >
                      Quản lí phiếu mượn
                    </Link>
                  </li>
                )}
                {user.info.role === 2 && (
                  <li className="nav-item">
                    <Dropdown
                      menu={{
                        items,
                      }}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          Admin
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                    {/* <Link
                to="admin"
                className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
              >
                Admin
              </Link> */}
                  </li>
                )}
              </>
            ) : (
              <li className="nav-item">
                <Link
                  to="login"
                  className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
                >
                  Đăng nhập
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

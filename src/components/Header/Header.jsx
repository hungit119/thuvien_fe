import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            Khám phá kho tàng tri thức tại thư viện sách đầy hứa hẹn
          </h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Thư viện sách là một điểm đến tuyệt vời cho những người yêu sách,
            cũng như những ai muốn tìm kiếm tri thức và giải trí. Với hàng ngàn
            cuốn sách khác nhau, các đầu sách bao gồm mọi thể loại từ tiểu
            thuyết, kinh tế, khoa học đến lịch sử và nghệ thuật, thư viện là nơi
            tốt nhất để các bạn có thể thoả mãn niềm đam mê của mình.
          </p>
          
        </div>
      </header>
    </div>
  );
};

export default Header;

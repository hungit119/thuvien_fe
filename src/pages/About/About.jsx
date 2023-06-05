import React from "react";
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>Tổng quát</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">Tổng quát về Libbook</h2>
            <p className="fs-17">
              Libbook là một thư viện sách trực tuyến cung cấp cho bạn hàng ngàn
              cuốn sách từ nhiều lĩnh vực khác nhau. Với giao diện đơn giản và
              dễ sử dụng, bạn có thể tìm kiếm và tải xuống các cuốn sách miễn
              phí trong vài giây.
            </p>
            <p className="fs-17">
              Thư viện Libbook chia các cuốn sách theo nhiều thể loại khác nhau
              như khoa học kỹ thuật, văn học, tiểu thuyết, truyện tranh, sách
              giáo khoa, và nhiều hơn nữa. Bạn có thể sắp xếp các cuốn sách theo
              tên, tác giả, hay chủ đề để dễ dàng tìm kiếm.
            </p>
            <p>
              Ngoài ra, Libbook còn cung cấp tính năng đánh giá và nhận xét của
              người đọc để giúp bạn quyết định chọn sách phù hợp với mình. Bạn
              có thể xem những đánh giá này trước khi quyết định tải xuống cuốn
              sách nào.
            </p>
            <p>
              Với việc đăng ký thành viên tại Libbook, bạn có thể lưu trữ tất cả
              các cuốn sách yêu thích của mình trên một tài khoản duy nhất. Điều
              này giúp bạn dễ dàng truy cập những tài liệu mình cần mà không
              phải tìm lại từ đầu.
            </p>
            <p>
              Tóm lại, Libbook là một thư viện sách trực tuyến đầy đủ và tiện
              lợi cho các độc giả đam mê sách. Với hàng ngàn cuốn sách chất
              lượng và tính năng đánh giá của người đọc, bạn có thể dễ dàng tìm
              kiếm và tải xuống những cuốn sách yêu thích của mình với chỉ một
              vài thao tác đơn giản.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

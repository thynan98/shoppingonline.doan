import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="customer-footer">
        <div className="footer-content">
          
          <div className="footer-section">
            <h3>NỘI THẤT HOME - NỘI THẤT CAO CẤP</h3>
            <p>
              Mang đến những không gian sống tinh tế, ấm áp và sang trọng. 
              Chuyên thiết kế & cung cấp nội thất hiện đại với chất liệu cao cấp, 
              cam kết chất lượng và dịch vụ tận tâm.
            </p>
          </div>

          <div className="footer-section">
            <h3>THÔNG TIN LIÊN HỆ</h3>
            <p>📍 Địa chỉ: Toà nhà Innovation, Khu Công Nghệ Cao, TP. Hồ Chí Minh</p>
            <p>📞 Điện thoại: 0987.654.321</p>
            <p>✉ Email: contact@doanhome.vn</p>
            <p>🕒 Giờ làm việc: 8:00 - 20:00 (Thứ 2 - Chủ Nhật)</p>
          </div>

          <div className="footer-section">
            <h3>VỀ CHÚNG TÔI</h3>
            <p>
              Nội Thất Home chuyên cung cấp các sản phẩm nội thất cao cấp: 
              sofa, bàn ăn, giường ngủ, kệ trang trí, đèn chiếu sáng và 
              tư vấn thiết kế không gian sống.
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 Đoan Home. All Rights Reserved. 
            Thiết kế nội thất - Mang vẻ đẹp về ngôi nhà bạn.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';
import './ProductDetail.css';

class ProductDetail extends Component {
  static contextType = MyContext;

  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };
  }

  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className="customer-content">
          <div className="customer-card detail-card">
            <div className="detail-split-layout">
              
              {/* Left Column: Image */}
              <div className="detail-image-col">
                <div className="detail-main-image-wrapper">
                  <img
                    src={'data:image/jpg;base64,' + prod.image}
                    alt={prod.name}
                    className="detail-main-image"
                  />
                </div>
              </div>

              {/* Right Column: Info & Action */}
              <div className="detail-info-col">
                <span className="detail-category-badge">
                  {prod.category ? prod.category.name : 'Nội thất'}
                </span>
                
                <h1 className="detail-title">{prod.name}</h1>
                
                <div className="detail-price-box">
                  <span className="price-label">Giá bán:</span>
                  <span className="price-value">{prod.price.toLocaleString('vi-VN')} ₫</span>
                </div>
                
                <div className="detail-specs">
                  <h3>Thông tin sản phẩm</h3>
                  <ul>
                    {prod.material && <li>Chất liệu: <strong>{prod.material}</strong></li>}
                    {prod.color && <li>Màu sắc: <strong>{prod.color}</strong></li>}
                    {prod.style && <li>Phong cách: <strong>{prod.style}</strong></li>}
                    {prod.size && <li>Kích thước: <strong>{prod.size}</strong></li>}
                    <li>Bảo hành: <strong>24 tháng</strong></li>
                    <li>Giao hàng: <strong>Miễn phí nội thành TP.HCM</strong></li>
                  </ul>
                </div>

                <div className="detail-actions">
                  <div className="qty-selector">
                    <label>Số lượng:</label>
                    <input
                      type="number"
                      min="1"
                      max="99"
                      value={this.state.txtQuantity}
                      onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }}
                      className="qty-input"
                    />
                  </div>
                  <button 
                    className="btn-primary detail-add-btn" 
                    onClick={(e) => this.btnAdd2CartClick(e)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
                
                <div className="detail-assurance">
                  <div className="assurance-item">☑ Chất liệu cao cấp, bền đẹp theo thời gian</div>
                  <div className="assurance-item">☑ Thiết kế tinh tế, phù hợp nhiều không gian</div>
                  <div className="assurance-item">☑ Tư vấn thiết kế miễn phí</div>
                  <div className="assurance-item">☑ Bảo hành chính hãng 24 tháng</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div>Đang tải thông tin sản phẩm...</div>;
  }

  componentDidMount() {
    const params = this.props.params;
    this.apiGetProduct(params.id);
  }

  apiGetProduct(id) {
    axios.get('/api/customer/products/' + id).then((res) => {
      this.setState({ product: res.data });
    }).catch(err => console.log(err));
  }

  btnAdd2CartClick(e) {
    e.preventDefault();
    const product = this.state.product;
    const quantity = parseInt(this.state.txtQuantity);

    if (quantity && quantity > 0) {
      const mycart = this.context.mycart;
      const index = mycart.findIndex(x => x.product._id === product._id);

      if (index === -1) {
        const newItem = { product: product, quantity: quantity };
        mycart.push(newItem);
      } else {
        mycart[index].quantity += quantity;
      }

      this.context.setMycart(mycart);
      alert(`Đã thêm ${quantity} ${product.name} vào giỏ hàng!`);
    } else {
      alert('Vui lòng nhập số lượng hợp lệ');
    }
  }
}

export default withRouter(ProductDetail);
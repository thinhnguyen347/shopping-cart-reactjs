import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavigationBar";
import { content } from "./component/MainContent";
import { addedItems } from "./component/mock-data";
import "./App.css";

function App() {
  let totalAmount = 0, subprice

  

  let vat = totalAmount*0.1;

  return (
    <>
      <Navbar />
      <nav aria-label="breadcrumb" className="ms-4 ms-lg-5 py-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-dark text-decoration-none">
              Trang chủ
            </a>
          </li>
          <li className="breadcrumb-item ">
            <a href="/" className="text-dark text-decoration-none">
              Thực đơn
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Giỏ hàng
          </li>
        </ol>
      </nav>
      <section className="px-3 py-5 p-md-5">
        <h2 className="text-center">GIỎ HÀNG</h2>
        <p className="h6 text-center">
          Hiện có tất cả{" "}
          <span className="total-items text-danger fw-bold">2</span> sản phẩm
          trong giỏ hàng
        </p>
        <p className="h6 pb-3 text-center">* * *</p>
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-12 col-md-8 py-0 ps-md-0"> {content} </div>
            <div className="col-12 col-md-4 pt-3 border rounded">
              <p className="h4 fw-bold text-center pb-3 border-bottom">
                Thông tin đơn hàng
              </p>

              <div className="mt-5 d-flex flex-row flex-wrap justify-content-between align-items-center">
                <p className="text-start text-secondary">VAT (10%):</p>
                <p className="h5 text-end">
                  <span className="vat-cost">{vat.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}</span>
                </p>
              </div>

              <div className="mt-5 mb-3 d-flex flex-row flex-wrap justify-content-between align-items-center">
                <p className="text-start text-secondary">Tổng tiền:</p>
                <p className="h5 text-end text-danger">
                  <span className="h3 total-cost">105.000</span> đ
                </p>
                <p className="text-secondary mt-4">
                  *** Phí vận chuyển, mã giảm giá sẽ được tính ở bước kế tiếp
                </p>
                <a
                  href="/"
                  className="payment btn btn-warning w-100 fw-bold text-uppercase"
                >
                  Thanh toán
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/NavigationBar";
import MainContent from "./component/MainContent";
import { addedItems } from "./component/mock-data";
import "./App.css";

function App() {
  const [addedList, setAddedList] = useState(addedItems);
  const [message, setMessage] = useState(true);

  let list = [...addedList];
  let vat, final_price, content;
  if (list.length > 0) {
    let subprice = list.map((item) => item.price * item.amount);
    let subprice1 = subprice.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    vat = subprice1 * 0.1;
    final_price = subprice1 + vat;

    const content = list.map(({ id, title, price, img, amount }) => (
      <MainContent
        key={id}
        title={title}
        price={price}
        img={img}
        amount={amount}
      />
    ));
  } else {
    vat = 0;
    final_price = 0;
    content=
  }

  function deleteAll() {
    setAddedList([]);
    setMessage(false);
  }

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
          {message
            ? `Hiện có tất cả ${addedItems.length} sản phẩm trong giỏ hàng`
            : "Hiện tại không có sản phẩm trong giỏ hàng"}
        </p>
        <p className="h6 pb-3 text-center">* * *</p>
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-12 col-md-8 py-0 ps-md-0">
              {content} {message}
              <p
                className="btn btn-secondary mt-3 text-end"
                onClick={deleteAll}
              >
                Xoá hết
              </p>
            </div>
            <div className="col-12 col-md-4 pt-3 border rounded">
              <p className="h4 fw-bold text-center pb-3 border-bottom">
                Thông tin đơn hàng
              </p>

              <div className="mt-5 d-flex flex-row flex-wrap justify-content-between align-items-center">
                <p className="text-start text-secondary">VAT (10%):</p>
                <p className="h5 text-end">
                  <span className="vat-cost">
                    {vat.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </p>
              </div>

              <div className="mt-5 mb-3 d-flex flex-row flex-wrap justify-content-between align-items-center">
                <p className="text-start text-secondary">Tổng tiền:</p>
                <p className="h5 text-end text-danger">
                  <span className="h3 total-cost">
                    {final_price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
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

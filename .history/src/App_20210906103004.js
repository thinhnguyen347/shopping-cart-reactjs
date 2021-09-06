import Navbar from './component/Navigation_bar';
import {addedItems}
import './App.css';

function App() {
  return (
    <div className="App">




// Header

const header = (
  <img
    src="https://i.ibb.co/HB6jWS2/street-food.webp"
    className="w-100"
    alt="header"
  />
);



function Show(props) {
  cónt price = new Number(props.price).toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND"
  });

  return (
    <div className="container-fluid p-0 mb-3">
      <div className="row row-cols-2 g-3">
        <div className="col-12 col-md-4 col-lg-2">
          <img src={props.img} alt="added-product" className="img-fluid" />
        </div>
        <div className="col-12 col-md-8 col-lg-10 container-fluid">
          <div className="row row-cols-2">
            <div className="col-12 col-lg-7">
              <p className="h5 item-name text-center text-lg-start">
                {props.name}
              </p>
              <div className="spinbox d-flex mx-auto ms-lg-0">
                <div className="border flex-fill text-center border-end-0 border-secondary rounded-start">
                  −
                </div>
                <div className="border flex-fill text-center  border-secondary">
                  1
                </div>
                <div className="border flex-fill text-center border-start-0  border-secondary rounded-end">
                  +
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <p className="h5 py-3 text-center fw-bold">
                <span className="price">{price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const content = addedItems.map((item) => (
  <Show
    key={item.id.toString()}
    name={item.name}
    price={item.price}
    img={item.img}
  />
));

// Lay-out
function Page() {
  return (
    <>
      <
      {header}
      <nav aria-label="breadcrumb" className="ms-4 ms-lg-5 py-3">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/" className="text-dark text-decoration-none">
              Trang chủ
            </a>
          </li>
          <li className="breadcrumb-item ">
            <a
              href="https://codepen.io/thinhnguyen01/full/JjNwpWd"
              className="text-dark text-decoration-none"
            >
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
        <p class="h6 text-center">
          Hiện có tất cả <span class="total-items text-danger fw-bold">2</span>{" "}
          sản phẩm trong giỏ hàng
        </p>
        <p class="h6 pb-3 text-center">* * *</p>
        <div className="container pt-5">
          <div className="row g-4">
            <div className="col-12 col-md-8 py-0 ps-md-0"> {content} </div>
            <div className="col-12 col-md-4 pt-3 border rounded">
              <p className="h4 fw-bold text-center pb-3 border-bottom">
                Thông tin đơn hàng
              </p>
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
      {footer}
    </>
  );
}


export default App;

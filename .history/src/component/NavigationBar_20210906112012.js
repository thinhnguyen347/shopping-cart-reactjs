import { FaOpencart } from 'react-icons/fa';
import "../component/NavigationBar.css";
import logo from "../component/img/logo.png"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-1 px-md-5 py-md-4 border-3 border-bottom border-secondary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src= {logo}
            alt="logo"
            width="130px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Trang chủ
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link position-relative"
                href="https://codepen.io/thinhnguyen01/full/JjNwpWd"
              >
                Thực đơn
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Đặt hàng
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Liên hệ
              </a>
            </li>
            <li className="nav-item d-block d-sm-block d-md-block d-lg-none d-xl-none d-xxl-none">
              <a className="nav-link" href="/">
                Giỏ hàng <span className="badge bg-danger rounded-pill"></span>
              </a>
            </li>
          </ul>

          <a
            className="cart position-relative mx-4 d-none d-sm-none d-md-none d-lg-block text-decoration-none text-dark"
            href="/"
          >
            <>
            <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
              2
            </span>
          </a>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

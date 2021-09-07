import React, { useState } from "react";
import { addedItems } from "./mock-data";

export default function MainContent() {
  const [addedList, setAddedList] = useState(addedItems);

  let list = [...addedList];

  function decrease(e, id) {
    let Id = e.target.id;
    let index = list.findIndex((element) => element.id === Id);
    if (list[index].amount > 0) list[index].amount = list[index].amount - 1;
    setAddedList(list);
  }

  function increase(e, id) {
    let Id = e.target.id;
    let index = list.findIndex((element) => element.id === Id);
    if (list[index].amount > 0) list[index].amount = list[index].amount - 1;
    setAddedList(list);
  }

  function deleteItem(e, id) {
    let Id = e.target.id;
    let index = list.findIndex((element) => element.id === Id);
    list.splice(index, 1);
  }

  let subtotal = price * amount;

  return ({list.map(({ id, title, price, img, amount }) =>
    <div className="container-fluid p-0 mb-3">
      <div className="row row-cols-2 g-3">
        <div className="col-12 col-md-4 col-lg-2">
          <img src={img} alt="added-product" className="img-fluid" />
        </div>
        <div className="col-12 col-md-8 col-lg-10 container-fluid">
          <div className="row row-cols-2">
            <div className="col-12 col-lg-5">
              <p className="h5 item-name text-center text-lg-start">{title}</p>
              <div className="spinbox d-flex mx-auto ms-lg-0">
                <div className="border flex-fill text-center border-end-0 border-secondary rounded-start">
                  <p className="fs-5 mb-0" onClick={(e) => decrease(e, id)}>
                    -
                  </p>
                </div>
                <div className="border flex-fill text-center border-secondary">
                  <p className="fs-6 mb-0 py-1">{amount}</p>
                </div>
                <div className="border flex-fill text-center border-start-0  border-secondary rounded-end">
                  <p className="fs-5 mb-0" onClick={(e) => increase(e, id)}>
                    +
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <p className="m-0 text-center">Đơn giá</p>
              <p className=" py-1 py-lg-2 text-center">
                <span className="price">
                  {price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </p>
            </div>
            <div className="col-6 col-md-6 col-lg-4 position-relative">
              <p className="m-0 text-center">Tổng tiền/món</p>
              <p className="h5 py-1 py-lg-2 text-center fw-bold">
                <span className="price">
                  {subtotal.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </span>
              </p>
              <button
                className="btn-close position-absolute end-0 top-0 p-0 mt-0 me-2 me-lg-4"
                onClick={(e) => deleteItem(e, id)}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

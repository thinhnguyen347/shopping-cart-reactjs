function Show([price]) {
    let price = new Number(props.price).toLocaleString("vi-VN", {
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
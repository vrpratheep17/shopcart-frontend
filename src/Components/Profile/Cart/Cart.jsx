import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/index";
 import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
const Cart = () => {
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");
  const [mode_of_payment, setmode_of_payment] = useState("Card");
  useEffect(() => {
    axios
      .get(`${config.backendAPI}/user/cart`)
      .then((res) => {
        setList(res.data.data);
        var amount = res.data.data.reduce(function (prev, cur) {
          return prev + cur["item.price"];
        }, 0);
        setAmount(amount);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let checkout = () => {
    axios
      .post(`${config.backendAPI}/payment/addapayment`, {
        address: address,
        amount: amount,
        mode_of_payment: mode_of_payment,
      })
      .then((res) => {
        setList([]);
        toast.success("Your Order is Placed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  let remove = (item) => {
    axios
      .delete(`${config.backendAPI}/user/deleteacart/${item.id}`)
      .then((res) => {
        let data = list.filter((li) => li.id !== item.id);
        setList(data);
        toast.error("Product removed from the cart", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // let moveToWishlist = (list) => {
  //   console.log(list);
  // };
  return (
    <div>
      <section>
        <div class="row">
          <div class="col-lg-8">
            <div class="card wish-list mb-3">
              <div class="card-body">
                <h5 class="mb-4">
                  Cart (<span>{list.length}</span> items)
                </h5>

                {list.map((li) => {
                  return (
                    <div class="row mb-4">
                      <div class="col-md-5 col-lg-3 col-xl-3">
                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                          <img
                            class="img-fluid w-100"
                            src={`${config.backendAPI}/${li["item.img"]}`}
                            alt="Sample"
                          />
                        </div>
                      </div>
                      <div class="col-md-7 col-lg-9 col-xl-9">
                        <div>
                          <div class="d-flex justify-content-between">
                            <div>
                              <h5>{li["item.name"]}</h5>

                              <p class="mb-3 text-muted text-uppercase small">
                                Size: M
                              </p>
                            </div>
                            <div>
                              <div class="def-number-input number-input safari_only mb-0 w-100"></div>
                            </div>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                            <div>
                              <button
                                onClick={() => {
                                  remove(li);
                                }}
                                type="button"
                                class="btn btn-light m-1"
                              >
                                Remove
                              </button>
                              {/* <button
                                onClick={() => {
                                  moveToWishlist(li);
                                }}
                                type="button"
                                class="btn btn-light m-1"
                              >
                                Move to wish list
                              </button> */}
                            </div>
                            <p class="mb-0">
                              <span>
                                <strong>${li["item.price"]}</strong>
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {list.length > 0 ? (
              <div class="card mb-3">
                <div class="card-body">
                  <h5 class="mb-4">Expected shipping delivery</h5>

                  <p class="mb-0"> 5-7 Days of Checkout</p>
                </div>
              </div>
            ) : null}

            <div class="card mb-3"></div>
          </div>

          <div class="col-lg-4">
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="mb-3">The total amount of</h5>

                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Amount
                    <span>${amount}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Free</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>${amount}</strong>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Address</strong>
                    </div>
                    <span>
                      <label for="address"></label>
                      <textarea
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        class="form-control"
                        id="address"
                        rows="3"
                      ></textarea>
                    </span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Mode of Payment</strong>
                    </div>
                    <span>
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <span>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Cash On Delivery
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault2"
                            >
                              Card
                            </label>
                          </div>
                        </span>
                      </li>
                    </span>
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    checkout();
                  }}
                  class="btn btn-primary btn-block waves-effect waves-light"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Cart;

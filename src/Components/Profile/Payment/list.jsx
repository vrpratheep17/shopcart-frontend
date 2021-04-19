import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config/index";
import { useParams } from "react-router-dom";
import moment from "moment";
 import { ToastContainer, toast } from "react-toastify";
const List = () => {
  const [list, setList] = useState([]);
  var { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`${config.backendAPI}/payment/paymentcart/${id}`)
      .then((res) => {
        setList(res.data.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let remove = (item) => {
    axios
      .delete(`${config.backendAPI}/user/deleteawishlist/${item.id}`)
      .then((res) => {
        let data = list.filter((li) => li.id !== item.id);
        setList(data);
        toast.error("Product is removed from your wishlist", {
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
  let addToCart = (item) => {
    axios
      .post(`${config.backendAPI}/user/cart`, {
        itemid: item.itemId,
      })
      .then((res) => {
        console.log(res);
        remove(item);
      });
  };
  // let moveToWishlist = (list) => {
  //   console.log(list);
  // };
  return (
    <div>
      <section>
        <div class="row">
          <div class="col-lg-12">
            <div class="card wish-list mb-3">
              <div class="card-body">
                <h5 class="mb-4">
                  Purchased (<span>{list.length}</span> items)
                </h5>

                {list.map((li) => {
                  return (
                    <div class="row mb-4">
                      <hr />
                      <div class="col-md-5 col-lg-3 col-xl-3">
                        <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                          <img
                            height="200"
                            src={`${config.backendAPI}/${li.item.img}`}
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
                              <p class="mb-3 text-muted text-uppercase small">
                                {li.item.description}
                              </p>
                              <p class="mb-3 text-muted text-uppercase small">
                                <strong>Sold By: </strong> {li.item.seller}
                              </p>
                            </div>
                            <div>
                              <div class="def-number-input number-input safari_only mb-0 w-100"></div>
                            </div>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0">
                              <span>
                                <strong>${li.item.price}</strong>
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
            <div class="card mb-3"></div>
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

export default List;

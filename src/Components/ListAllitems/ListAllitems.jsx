import React, { useState, useEffect } from "react";
import styles from "./ListAllitems.module.css";
import product1 from "../assets/images/product1.jpg";
import { useHistory } from "react-router-dom";
import { CButton } from "@coreui/react";
import axios from "axios";
import config from "./../config/index";
import CIcon from "@coreui/icons-react";
import { ToastContainer, toast } from "react-toastify";
import jwt_decode from "jwt-decode";
const ListAllitems = () => {
  const [id, setId] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      var token = localStorage.getItem("token");
      var decoded = jwt_decode(token);
      setId(decoded.id);
    }
  }, []);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  let addCart = (item) => {
    console.log(item.id);
    console.log(id);
    axios
      .post(`${config.backendAPI}/user/cart`, {
        userid: id,
        itemid: item.id,
      })
      .then((res) => {
        toast.success("Product added to the cart", {
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
   let addWishlist = (item) => {
     console.log(item.id);
     console.log(id);
     axios
       .post(`${config.backendAPI}/user/wishlist`, {
         userid: id,
         itemid: item.id,
       })
       .then((res) => {
         toast.success("Product added to the wishlist", {
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
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${config.backendAPI}/item/getallitems`)
      .then((res) => {
        setLoading(false);
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="mt-4 text-center">
      <div style={{ fontSize: "3vw" }}>Products</div>
      {id ==null ? <div>Login to purchase the product</div>:null}
      <div className="text-poppins m-4"></div>
      <div className="row">
        {items.map((item) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-12 p-1">
              <div className={styles.card}>
                <img
                  src={`${config.backendAPI}/${item.img}`}
                  className={styles.image}
                />
                <div className="text-center">{item.name} </div>
                <div className="text-center">${item.price}</div>
                {id == null ? null : (
                  <div>
                    {" "}
                    <CButton
                      onClick={() => {
                        addCart(item);
                      }}
                      variant="ghost"
                      color="success"
                    >
                      <img
                        height="20"
                        className="m-3"
                        src="https://img.icons8.com/cotton/64/000000/fast-cart.png"
                      />
                      Add to Cart
                    </CButton>
                    <CButton
                      onClick={() => {
                        addWishlist(item);
                      }}
                      variant="ghost"
                      color="success"
                    >
                      <img
                        height="30"
                        title="wishlist"
                        src="https://img.icons8.com/plasticine/100/000000/like--v2.png"
                      />
                    </CButton>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
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

export default ListAllitems;

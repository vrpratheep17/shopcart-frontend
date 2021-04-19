import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";
import product1 from "../../../assets/images/product1.jpg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import config from "../../../config/index";

const Products = () => {
  const [items,setItems]=useState([])
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    
 setLoading(true)
    axios
      .get(`${config.backendAPI}/item/getallitems`)
      .then((res) => {
        setLoading(false)
        setItems(res.data.data.slice(0, 4));
      
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const history = useHistory();
  return (
    <div className="mt-4 text-center">
      <div style={{ fontSize: "3vw" }}>Products</div>
      <div className="text-poppins m-4"></div>
      {loading ? (
        <div>Loading... </div>
      ) : (
        <div className="row">
          {items.map((item) => {
            return (
              <div className="col-lg-3 col-md-3 col-sm-12 p-1">
                <div className={styles.card} onClick={() => history.push("/list")}>
                  <img 
                    src={`${config.backendAPI}/${item.img}`}
                    className={styles.image} 
                  />
                  <div className="text-center">{item.name}</div>
                  <div className="text-center">${item.price}</div>
                </div>
              </div>
            );
          })}

          <div className="text-center m-3">
            <button
              type="button"
              class="btn btn-dark"
              onClick={() => history.push("/list")}
            >
              Show All Collections
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;

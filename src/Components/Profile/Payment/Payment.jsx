import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../../config/index";
import Moment from "react-moment";
import money from "../../assets/images/money.png";
import { useHistory } from "react-router-dom";
const Payment = () => {
  const history = useHistory();
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    axios
      .get(`${config.backendAPI}/payment/payment`)
      .then((data) => {
        console.log(data.data.data);
        setList(data.data.data);
        var amount = data.data.data.reduce(function (prev, cur) {
          return prev + cur["amount"];
        }, 0);
        setAmount(amount);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          {list.map((li) => {
            return (
              <div class="card text-center" style={{ width: "50vw" }}>
                <div class="card-header">
                  <Moment format="YYYY-MM-DD">{li.created_at}</Moment>
                </div>
                <div class="card-body">
                  <h5 class="card-title" style={{ fontsize: "50px" }}>
                    ${li.amount}
                  </h5>

                  <button
                    onClick={() => history.push(`list/${li.id}`)}
                    class="btn btn-primary"
                  >
                    Show Orders items
                  </button>
                </div>
                <div class="card-footer text-muted">{li.mode_of_payment}</div>
              </div>
            );
          })}
        </div>
        <div className="col-lg-4">
          <div class="card text-center">
            <div class="card-header">Total Amount Spend</div>
            <div class="card-body">
              <img height="270" src={money} />
              <h5 class="card-title" style={{ fontsize: "50px" }}>
                ${amount}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

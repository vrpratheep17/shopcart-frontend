import React from "react";
import styles from "./Deals.module.css";
import { useHistory } from "react-router-dom";
const Deals = () => {
  const history = useHistory();
  return (
    <div className="mt-4 text-center">
      <div className="text-poppins m-4"></div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 p-1">
          <div className={`${styles.card} ${styles.cardBgImage1}`}>
            <div className={styles.cardBgImageOverlay} />
            <div className={styles.innerText}>
              <div className="text-light">Basic t-shirts $29,99</div>
              <button
                onClick={() => history.push("/list")}
                type="button"
                class={`${styles.borderRadius} btn btn-light mt-4`}
              >
                Show collections
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-1">
          <div className={`${styles.card} ${styles.cardBgImage2}`}>
            <div className={styles.cardBgImageOverlay} />
            <div className={styles.innerText}>
              <div className="text-light">New arrival are now in</div>
              <button
                onClick={() => history.push("/list")}
                type="button"
                class={`${styles.borderRadius} btn btn-light mt-4`}
              >
                more details
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 p-1">
          <div className={`${styles.card} ${styles.cardBgImage3}`}>
            <div className={styles.cardBgImageOverlay} />
            <div className={styles.innerText}>
              <div className="text-light">Cauals start's at $59,99</div>
              <button
                onClick={() => history.push("/list")}
                type="button"
                class={`${styles.borderRadius} btn btn-light mt-4`}
              >
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

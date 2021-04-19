import React from 'react'
import styles from './Jumbotron.module.css';
import { useHistory } from "react-router-dom";
 const Jumbotron = () => {
   const history = useHistory();
    return (
        <div className={`${styles.showcaseImage} text-center`}>
            <div className={styles.showcaseImageOverlay} />
            <div className={`${styles.innerText} row`}>
                <div className="col-lg-6 col-md-12 col-sm-12">
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-light mt-4 f-22 wrapper">
                  <div className={styles.mt5}>
                  <div  className={`${styles.textPoppins} ${styles.f18}`}>Grab the</div>
                    <div className={`${styles.textPoppins} ${styles.f22}`}> SUMMER</div>
                    <div className={`${styles.textPoppins} ${styles.f18}`}>sale</div>
                    <button  onClick={() => history.push("/list")} type="button" class={`${styles.borderRadius} btn btn-light mt-4`}>Shop Now</button>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron
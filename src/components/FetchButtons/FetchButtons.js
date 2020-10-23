import React from "react";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchSmallData, fetchBigData } from "../../actions/actions";

import styles from "./FetchButtons.module.css";

const FetchButtons = ({ fetchSmallData, fetchBigData }) => {
  const isBlocked = useSelector(state => state.loading);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button className={styles.btn} onClick={() => fetchSmallData()} disabled={isBlocked}>
          Fetch small dataset
        </button>
        <button className={styles.btn} onClick={() => fetchBigData()} disabled={isBlocked}>
          Fetch big dataset
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispath) => {
  return bindActionCreators({ fetchSmallData, fetchBigData }, dispath);
};

export default connect(null, mapDispatchToProps)(FetchButtons);

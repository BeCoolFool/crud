import React from "react";
import DataTable from "./components/DataTable/DataTable";
import FetchButtons from "./components/FetchButtons/FetchButtons";

import styles from "./App.module.css";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1> Create, Read, Update, Delete whith React and Redux </h1>
        <FetchButtons />
        <ErrorBoundary>
          <DataTable />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { connect } from "react-redux";
import {
  handleInputChange,
  updatingPersonAbort,
  updatingPersonSuccess,
} from "../../actions/actions";

import styles from "./UpdatePersonForm.module.css";

const UpdatePersonForm = ({
  person,
  inputChanged,
  closeForm,
  updatePerson,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <p>Update User Details</p>
          <button
            type="button"
            className={styles["close-btn"]}
            onClick={() => closeForm()}
          >
            <span>&times;</span>
          </button>
        </div>
        <form
          className={styles.form}
          onSubmit={(e) => updatePerson(e, person.index)}
        >
          <input
            className={styles.input}
            type="text"
            name="firstName"
            value={person.firstName}
            onChange={inputChanged}
            required
          ></input>
          <input
            className={styles.input}
            type="text"
            name="lastName"
            value={person.lastName}
            onChange={inputChanged}
            required
          ></input>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={person.email}
            onChange={inputChanged}
            required
          ></input>
          <input
            className={styles.input}
            type="tel"
            name="phone"
            value={person.phone}
            onChange={inputChanged}
            required
          ></input>
          <button type="submit" className={styles["submit-btn"]}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    person: state.updatePersonForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (e) => dispatch(handleInputChange(e)),
    closeForm: () => dispatch(updatingPersonAbort()),
    updatePerson: (e, idx) => {
      e.preventDefault();
      dispatch(updatingPersonSuccess(idx));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePersonForm);

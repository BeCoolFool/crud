import React from "react";
import { connect } from "react-redux";
import { deletePerson, startUpdatingPerson } from "../../actions/actions";
import Loader from "../Loader/Loader";
import UpdatePersonForm from "../UpdatePersonForm/UpdatePersonForm";
import styles from "./DataTable.module.css";

const DataTable = ({
  loading,
  data,
  deletePerson,
  startUpdatingPerson,
  isEditing,
}) => {
  return loading ? (
    <Loader />
  ) : data.length === 0 ? (
    <h1>Fetch some data!</h1>
  ) : (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>№</th>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>E-MAIL</th>
            <th>PHONE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, idx) => {
            return (
              <tr key={person.id + person.phone}>
                <td>{++idx}</td>
                <td>{person.id}</td>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>
                <td>
                  <button
                    className={styles["btn-edit"]}
                    onClick={() => startUpdatingPerson(person.id)}
                  >
                    Edit
                  </button>
                  <button
                    className={styles["btn-delete"]}
                    onClick={() => deletePerson(person.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {isEditing ? <UpdatePersonForm /> : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.pureData,
    loading: state.loading,
    isEditing: state.isEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePerson: (id) => dispatch(deletePerson(id)),
    startUpdatingPerson: (idx) => dispatch(startUpdatingPerson(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);

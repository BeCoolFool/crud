const initializeFetch = () => ({ type: "FETCH_DATA_REQUEST" });

const fetchDataFailed = (err) => ({ type: "FETCH_DATA_FAILED", payload: err });

const handleAppError = (err) => ({ type: "APP_ERROR", payload: err });

const deletePerson = (id) => ({ type: "DELETE_PERSON", payload: id });

const handleInputChange = (e) => {
  return {
    type: "PERSON_INPUT_CHANGE",
    payload: {
      name: e.target.name,
      text: e.target.value,
    },
  };
};

const updatingPersonAbort = () => ({ type: "EDIT_PERSON_ABORT-CHANGES" });

const updatingPersonSuccess = (idx) => ({
  type: "EDIT_PERSON_SAVE-CHANGES",
  payload: idx,
});

const startUpdatingPerson = (id) => ({
  type: "EDIT_PERSON_IN-PROGRESS",
  payload: id,
});

const fetchSmallDataSuccess = (data) => ({
  type: "FETCH_SMALL-DATA_SUCCESS",
  payload: data,
});

const fetchBigDataSuccess = (data) => ({
  type: "FETCH_BIG-DATA_SUCCESS",
  payload: data,
});

const fetchSmallData = () => {
  return (dispatch) => {
    dispatch(initializeFetch());
    fetch(
      "https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}"
    )
      .then((data) => data.json())
      .then((data) => {
        dispatch(fetchSmallDataSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDataFailed(err));
      });
  };
};

const fetchBigData = () => {
  return (dispatch) => {
    dispatch(initializeFetch());
    fetch(
      "https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}"
    )
      .then((data) => data.json())
      .then((data) => {
        dispatch(fetchBigDataSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchDataFailed(err));
      });
  };
};

export {
  fetchSmallData,
  fetchBigData,
  handleAppError,
  deletePerson,
  startUpdatingPerson,
  handleInputChange,
  updatingPersonAbort,
  updatingPersonSuccess
};

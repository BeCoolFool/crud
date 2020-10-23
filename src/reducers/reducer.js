const initialState = {
  loading: false,
  pureData: [],
  error: null,
  isEditing: false,
  updatePersonForm: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SMALL-DATA_SUCCESS":
      return { ...state, loading: false, pureData: action.payload };
    case "FETCH_BIG-DATA_SUCCESS":
      return { ...state, loading: false, pureData: action.payload };
    case "FETCH_DATA_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "APP_ERROR":
      return { ...state, error: action.payload };
    case "DELETE_PERSON":
      return {
        ...state,
        pureData: state.pureData.filter(
          (person) => person.id !== action.payload
        ),
      };
    case "EDIT_PERSON_IN-PROGRESS":
      const index = state.pureData.findIndex(
        (elem) => elem.id === action.payload
      );
      return {
        ...state,
        isEditing: true,
        updatePersonForm: { ...state.pureData[index], index: index },
      };
    case "PERSON_INPUT_CHANGE":
      return {
        ...state,
        updatePersonForm: {
          ...state.updatePersonForm,
          [action.payload.name]: action.payload.text,
        },
      };
    case "EDIT_PERSON_SAVE-CHANGES":
      return {
        ...state,
        pureData: [
          ...state.pureData.slice(0, action.payload),
          state.updatePersonForm,
          ...state.pureData.slice(action.payload + 1),
        ],
        isEditing: false,
        updatePersonForm: {},
      };
    case "EDIT_PERSON_ABORT-CHANGES":
      return { ...state, isEditing: false, updatePersonForm: {} };
    default:
      return state;
  }
};

export default reducer;

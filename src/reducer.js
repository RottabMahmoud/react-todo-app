export const initialState = {
  data: [],
};
const reducer = (state, action) => {
  console.log(action, "ACTIOn");
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

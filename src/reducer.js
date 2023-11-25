export const initialState = {
  data: [],
};
const reducer = (state, action) => {
  console.log(action, "ACTIOn");
  switch (action.type) {
    case "FETCH_TODOS":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_TODO":
      let arr = initialState.data;
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    default:
      return state;
  }
};

export default reducer;

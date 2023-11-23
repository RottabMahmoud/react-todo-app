export const initialState = {
  data: [],
};
const reducer = (state, action) => {
  console.log(action, "ACTIOn");
  switch (action.type) {
    case "FETCH_NEWS":
      return {
        ...state,
        data: [1, 345, 246, 24, 5624, 56, 2456, 2456],
      };
    default:
      return state;
  }
};

export default reducer;

import axios from "axios";

export const initialState = {
  data: [],
};
const fetchNews = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  console.log(response.data);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      fetchNews();
      console.log(state.data, "REDUX");
      return {
        ...state,
        data: ["EMPTY ARRAY"],
      };
    default:
      return state;
  }
};

export default reducer;

export const initialState = {
  data: [
    {
      id: 1,
      title: "Swimming CLass",
      completed: false,
    },
    {
      id: 2,
      title: "Volleyball CLass",
      completed: false,
    },
    {
      id: 3,
      title: "Yoga CLass",
      completed: false,
    },
    {
      id: 4,
      title: "Studying CLass",
      completed: true,
    },
  ],
};
const reducer = (state, action) => {
  console.log(action, "ACTIOn");
  switch (action.type) {
    // case "FETCH_TODOS":
    //   return {
    //     ...state,
    //     data: action.payload,
    //   };
    case "ADD_TODO":
      let arr = initialState.data;
      return {
        ...state,
        data: [action.payload, ...state.data],
      };
    case "FILTER_TODO":
      const index = state.data.findIndex((todo) => todo.id === action.payload);
      state.data[index].completed = !state.data[index].completed;
      console.log(index + 1, "INDEXXXXXX");
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;

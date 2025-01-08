const initialState = { quote: "", author: "" };
export const quotesSlice = (state = initialState, action) => {
  switch (action.type) {
    case "Get_Random_Quote":
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };

    default:
      return state;
  }
};

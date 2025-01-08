const initialState = { quote: "", author: "" };
export const quotesSlice = (state = initialState, action) => {
  switch (action.type) {
    case "Get_Random_Quote":
      console.log("quotes in Reducer:", action.payload); // Log to ensure action payload has data
      return {
        ...state,
        quote: action.payload.quote,
        author: action.payload.author,
      };

    default:
      return state;
  }
};

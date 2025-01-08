import axios from "axios";

export const getRandomQuote = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      console.log("API Response:", response.data);
      dispatch({ type: "Get_Random_Quote", payload: response.data });
      console.log("payload", response.data);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
};

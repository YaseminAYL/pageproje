import axios from "axios";

export const fetchUser = () => {
  return (dispatch) => {
    dispatch({
      type: "FETCH_USER",
      payload: axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.data),
    });
  };
};

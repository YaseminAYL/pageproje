const initialState = {
  users: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_USER_PENDING":
      return { ...state };

    case "FETCH_USER_FULFILLED":
      return { ...state, users: payload };

    case "FETCH_USER_REJECTED":
      return { ...state };

    default:
      return state;
  }
};

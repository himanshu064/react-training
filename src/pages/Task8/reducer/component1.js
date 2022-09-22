const user = "noData";

const Data = (state = user, action) => {
  switch (action.type) {
    case "USERLOGGEDIN":
      return (state = action.payload);
    default:
      return state;
  }
};

export default Data;

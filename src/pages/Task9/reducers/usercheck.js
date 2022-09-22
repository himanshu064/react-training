const user = "";

const CheckUser = (state = user, action) => {
  switch (action.type) {
    case "CHECKUSER":
      return (state = action.payload);
    default:
      return state;
  }
};

export default CheckUser;

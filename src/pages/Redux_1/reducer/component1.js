const products = [];

const Data = (state = products, action) => {
  switch (action.type) {
    case "SHOWDATA":
      return (products = action.payload);
    default:
      return state;
  }
};

export default Data;

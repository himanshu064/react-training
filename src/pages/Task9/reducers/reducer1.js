const chatData = "Loading...";

const MyChatData = (state = chatData, action) => {
  switch (action.type) {
    case "WHENLOGGIN":
      return state;
    default:
      return state;
  }
};

export default MyChatData;

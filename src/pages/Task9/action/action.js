export const UserChatData = () => {
  return { type: "WHENLOGGIN" };
};
export const CheckUser = (userName) => {
  return { type: "CHECKUSER", payload: userName };
};

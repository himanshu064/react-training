export const userLogIn = (user) => {
  return {
    type: "USERLOGGEDIN",
    payload: user,
  };
};

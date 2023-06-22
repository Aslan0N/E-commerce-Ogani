export const Util = () => {
  const data = JSON.parse(localStorage.getItem("User"));
  if (data) return true;
  else return false;
};



import { useParams } from "react-router-dom";
const Routes = () => {
  const { id } = useParams();
  const fullUrldata = JSON.parse(localStorage.getItem("visitedLink"));
  let x = fullUrldata.find((item) => item.id === id);
  window.location.href = x.fullUrl;
};

export default Routes;

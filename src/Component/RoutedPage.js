import { useParams } from "react-router-dom";
const RoutedPage = () => {
  const { id } = useParams();
  const fullUrldata = JSON.parse(localStorage.getItem("visitedLink"));
  console.log(fullUrldata);
  let x = fullUrldata.find((item) => item.id === id);
  console.log(x.fullUrl);
  window.location.href = x.fullUrl;
};

export default RoutedPage;

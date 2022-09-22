import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
function ListData() {
  const [products, setProducts] = useState([]);
  // const allproducts = useSelector((state) => state.showData )
  // console.log(allproducts)
  useEffect(() => {
    const fetching = async () => {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    };
    fetching();
  }, []);
  // const dispatch = useDispatch()
  // dispatch(showingData(products))
  console.log(products, "products");
  return (
    <div>
      <ul>
        {products.map((item, index) => {
          return (
            <div key={index}>
              <li>
                ID : {item.id} , TITLE : {item.title} , RATING : {item.rating} ,
                BRAND : {item.brand}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListData;

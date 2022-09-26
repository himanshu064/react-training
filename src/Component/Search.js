import React, { useEffect, useState } from "react";
const Search = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const HandleChange = (e) => {
    setSearch(e.target.value);
  };
  let url = `https://dummyjson.com/products/search?q=${search}`;
  const fetchProductList = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProductList();
    //eslint-disable-next-line
  }, [search]);
  const debounceAgain = function (fun, delay) {
    let timer;
    return function () {
      let context = this,
        args = arguments;
      clearTimeout(timer);
      setTimeout(() => {
        HandleChange.apply(context, args);
      }, delay);
    };
  };
  const searchAgain = debounceAgain(HandleChange, 600);
  return (
    <div className="m-3">
      <input
        type="text"
        className="form-control"
        placeholder="search filed"
        style={{ width: "30vw" }}
        onChange={searchAgain}
      />
      <section className="p-3">
        <div className="container">
          <div className="row">
            {products.map((items) => {
              const { id, title, description, price, thumbnail } = items;
              return (
                <div className="col-xl-4">
                  <div className="card" style={{ width: "20vw" }} key={id}>
                    <img src={thumbnail} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">{description}</p>
                      <h5 className="card-title"> ${price}</h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Search;

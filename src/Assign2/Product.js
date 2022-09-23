import React, { useEffect, useState } from 'react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    // Fetching Products
const fetchProducts = async () => {
    const url = `https://dummyjson.com/products/search?q=${search}`;
    // const url = `https://dummyjson.com/products`;
    const data = await fetch(url);
    const parseData = await data.json();
    setProducts(parseData.products);
}
const HandleChange=(e)=>{
  setSearch(e.target.value);
  console.log(search,'search')
}

const debounceAgain = function (fun,delay) {
    let timer;
    return function () {
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(()=>{
            HandleChange.apply(context,args);
      },delay)
    }
}
const resultAgain = debounceAgain (HandleChange,300);
    
    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line
    }, [search])

    return (
        <>   
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="/">Shop-App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Abhishek Kumar</a>
        </li>
        </ul>
        <input onChange={resultAgain} type='text' className="form-control" placeholder="Search"/>
        </div>
        </div>
        </nav>
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />

        <div className="row">
            {products.map((element,index) => {
             return (
                <div className="my-3 col-md-5" key={index}>
                <div className="card">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}> 
                        <span className="badge rounded-pill bg-danger"> {element.brand} </span>
                    </div>
                    <div className="image">
               <img src={element.images[0]} alt={element.title} />
               </div>
                    <div className="card-body">
                        <h5 className="card-title">{element.title}  </h5>
                        <h5 className="card-title">$ {element.price}  </h5>
                        <h5 className="card-title">{element.category}  </h5>
                        <p className="card-text">{element.description}</p>
                    </div>
                </div>
            </div>
            )
            })}
        </div>
        </>
    )
}

export default Products;
import React, { useEffect, useState } from 'react';
import "./App.css";

export default function Index() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [move, setMove] = useState(0);
  const moveComment = [0, 25, 50, 75, 100];

  const url = `https://dummyjson.com/comments?limit=${limit}&skip=${skip}`;
  // function getData(){
  //   fetch(url)
  //   .then ((response) =>{
  //     return response.json();
  //   })
  //   .then((data) =>{
  //     setItems (data.comments)
  //   });
  // }
  //   getData();

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setItems(data.comments);
  };

  useEffect(() => {
    getData()
  }, [skip, limit]);

  const HandleChange = (event) => {
    const LIMIT = parseInt(event.target.value);
    const newLimit = LIMIT;
    setLimit(newLimit);
    setMove(event.target.value);
  };
  const clickNext =() =>{
    
    setSkip(skip + limit)
  };
  const clickPre =() =>{
    setSkip(skip - limit)
  };
  return (
    <>
      <h3 className='heading' > Fetching Comments Through API </h3>
      {items.map((key) => {
        return (
          <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id={`flush-heading${key.id}`}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${key.id}`} aria-expanded="false" aria-controls={`flush-collapse${key.id}`}>
      <h5 username> UserName: {key.user.username} </h5>
      </button>
    </h2>
    <div id={`flush-collapse${key.id}`} class="accordion-collapse collapse" aria-labelledby={`flush-heading${key.id}`} data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><h5 className='bodyitem'>Comment: {key.body} </h5>
       <h5 className='bodyitem'> ID: {key.id} </h5>
       <h5 className='bodyitem'>Post ID: {key.postId} </h5></div>
    </div>
  </div>
  </div>
        )
      })}

      <div>
        <div className='d-flex justify-content-end mt-4 mb-3 page-btn'>
          <select className='form-select mx-3 jump' aria-label="Default select example" value={move} onChange={HandleChange}>
            {moveComment.map((item) => {
              return <option key="{item}" >{item}</option>;
            })}
          </select>
        </div>
        <button disabled={skip === 330} className="btn" onClick={clickNext} > Next </button>
        <button disabled={skip===0} className="btn" onClick={clickPre} > Previous </button>
        {/* <button disabled={skip===1000} className="btn" onClick={() => setSkip(skip + limit)} > Next </button>
        <button disabled={skip===0} className="btn" onClick={() => setSkip(skip - limit)} > Previous </button> */}
      </div>
    </>
  )
}
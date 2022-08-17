import React, {useEffect, useState} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import "./App1.css";

export default function Index() {
const [items, setItems] = useState([]);
const [limit, setLimit] = useState(10);
const [skip, setSkip] = useState(0);

  const url = `https://dummyjson.com/comments?limit=${limit}&skip=${skip}`;

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setItems(data.comments);
  };

  useEffect(() =>{
    getData()
  },[limit]);

    const nextData = async () => {
      let newLimit = limit + skip;
      const newUrl = `https://dummyjson.com/comments?limit=${limit}&skip=${newLimit}`;
      console.log(newUrl);
      const response = await fetch(newUrl);
      const data = await response.json();
      setItems(items.concat(data.comments));
      setSkip(newLimit);
    };
  return (
    <>
     <h3 className='heading' > Fetching Comments Through API </h3>
    <InfiniteScroll
            dataLength={items.length}
            next={nextData}
            hasMore={items.length < 340 ? true : false}
            loader={<h5> Wait it's Loading...</h5>} >
               {items.map((key) =>{
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

          </InfiniteScroll>  
    </>
  )
}
import React,{useState,useEffect} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import './style.css';


const Scroll = () => {
    const [post, setPost] = useState([]);
    const [comment, setComment] = useState([]);
    const [limit] = useState(10);
    const [skip, setSkip] = useState(0);
    const [total , setTotal] = useState(0)

useEffect(() =>{
  getData()
   // eslint-disable-next-line
},[limit]);

 // Fetching Posts
const getData = async () => {
    const url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
    const response = await fetch(url);
    const data = await response.json();
    setPost(data.posts);
    setTotal (data.total)
  };

   // Fetching Comments
   const getcomments =async (key)=>{
    const url = `https://dummyjson.com/posts/${key}/comments`;
    const data = await fetch (url);
    const parseData = await data.json()
    setComment (parseData.comments)
  }

  const HandleClick=(key)=>{
    getcomments(key)
    }

    const nextData = async () => {
      let newLimit = limit + skip;
      const newUrl = `https://dummyjson.com/posts?limit=${limit}&skip=${newLimit}`;
      const response = await fetch(newUrl);
      const data = await response.json();
      setPost(post.concat(data.posts));
      setSkip(newLimit);
    };

  return (
    <>
    <h3 className='heading' > Fetching Posts Through API </h3>
    <InfiniteScroll
            dataLength={post.length}
            next={nextData}
            hasMore={post.length < total ? true : false}
            loader={<h5> Wait it's Loading...</h5>} >
      <div className="accordion accordion-flush" id="accordionFlushExample">
               {post.map((element, index) =>{
    return (
      <div className="accordion-item" key={index}>
      <h2 className="accordion-header" id={`flush-heading${element.id}`}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${element.id}`} aria-expanded="false" aria-controls={`flush-collapse${element.id}`} onClick={()=>HandleClick(element.id)}>
        <h5> Title: {element.title} </h5>
        </button>
      </h2>
      <div id={`flush-collapse${element.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${element.id}`} data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
          <>
          <h5 className='bodyitem'> Body: {element.body} </h5>
          <h5 className='bodyitem'> Id: {element.id} </h5>
          </>
      {comment.map((item)=>{
        return(
          <>  
          <h5 className='bodyitem'>Comment: {item.body}</h5>
          </>
        )
      })}
         </div>
      </div>
    </div>
  )
  })}
    </div>      
  </InfiniteScroll>  
    </>
  )
}

export default Scroll;

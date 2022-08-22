import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

export default function Index() {
  const [post, setPost] = useState ([]);
  const [comment, setComment] = useState ([]);
  const [limit, setLimit] = useState (10);
  const [skip, setSkip] = useState (0);
  const [move, setMove] = useState (0);
  const [total , setTotal] = useState(0)
  const jumpToPage = [0,25,50,75,100];

  useEffect(()=>{
    getposts() 
    // eslint-disable-next-line
  },[skip,limit])

  // Fetching Posts
  const getposts =async ()=>{
    const url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
    const data = await fetch (url);
    const parseData = await data.json()
    setPost (parseData.posts)
    setTotal (parseData.total)
  }

  // Fetching Comments
  const getcomments =async (key)=>{
    const url = `https://dummyjson.com/posts/${key}/comments`;
    const data = await fetch (url);
    const parseData = await data.json()
    setComment (parseData.comments)
  }

  const HandleChange = (event)=>{
    const LIMIT =(event.target.value);
    setLimit(LIMIT);
    setMove(event.target.value);
  };

  const HandleClick=(key)=>{
  getcomments(key)
  }

  // For Pagination
  const paginate = async(pagenumber)=>{
     const url = `https://dummyjson.com/posts?limit=${limit}&skip=${(pagenumber - 1)*limit}`;
    const data = await fetch (url);
    const parseData = await data.json()
    setPost (parseData.posts) 
  }
 
  return (

    // View Port Of Task
    // Fetching Data Of Body
    <div>
      <h2 className='heading'>Fetching Posts From API </h2>
      <div className="accordion accordion-flush" id="accordionFlushExample">
       {post.map((element, index)=>{
        return(
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
    {comment.map((item, ind)=>{
      return(
        <>  
        <h5 className='bodyitem' key={ind}>Comment: {item.body}</h5>
        </>
      )
    })}
       </div>
    </div>
  </div>
)
})}
   {/* All Buttons */}
    <div className='d-flex justify-content-end mt-4 mb-3 page-btn'>
          <select className='form-select mx-3 jump' aria-label="Default select example" value={move} onChange={HandleChange}>
            {jumpToPage.map((element) => {
              return <option key="{element}" >{element}</option>;
            })}
          </select>
        </div>
  </div>
        <button disabled={skip===0} className="btn" onClick={() => setSkip(skip - limit)} > Previous </button>
           <Pagination postperpage={limit} totalPosts={total} paginate={paginate}/>
        <button  className="btn" onClick={() => setSkip (parseInt (skip) + parseInt (limit))} > Next </button>
    </div>
  )
}

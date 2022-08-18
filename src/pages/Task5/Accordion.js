import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
function AccordionComponent({ posts, loading }) {
  const [comments, setComments] = useState([])
  if (loading) {
    console.log("loading...")
    return <h1>Loading...</h1>
  }

  const getcomments = async (index) => {
    const res = await axios.get('https://dummyjson.com/posts/' + (index + 1) + '/comments')
    setComments(res.data.comments)
  }

  return (
    <>
      <Accordion>
        {posts.map((item, index) => {
          return <>
            <Accordion.Item eventKey={index + 1} key={index + 1} >
              <Accordion.Header onClick={() => { getcomments(index) }} key={item + index}>{item.title}</Accordion.Header>
              <Accordion.Body key={item}>
                {item.body}
                {comments.map((item, index) => { return <p style={{ color: "blue" }}>{item.user.username} : {item.body}</p> })}
              </Accordion.Body>
            </Accordion.Item>
          </>
        })}
      </Accordion>
    </>
  );
}

export default AccordionComponent;
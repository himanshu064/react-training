import React, { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Accordion from "react-bootstrap/Accordion";

function AccordionComponent({ postsperpage }) {
  const [posts, setPosts] = useState([]);
  const [currentpage, setCurrenpage] = useState(1);
  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState();
  const fetching = async () => {
    const res = await axios.get(
      "https://dummyjson.com/posts?limit=" +
        postsperpage +
        "&skip=" +
        (currentpage - 1) * postsperpage
    );
    setTimeout(() => {
      setTotal(res.data.total);
      const newdata = res.data.posts;
      const allData = [...posts, ...newdata];
      setPosts(allData);
      setCurrenpage(currentpage + 1);
    }, 1500);
  };
  const getcomments = async (index) => {
    const res = await axios.get(
      "https://dummyjson.com/posts/" + (index + 1) + "/comments"
    );
    setComments(res.data.comments);
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <Accordion>
        <InfiniteScroll
          dataLength={posts.length}
          next={fetching}
          hasMore={posts.length < total ? true : false}
          loader={<h3 style={{ textAlign: "center" }}>Loading...</h3>}
        >
          {posts.map((item, index) => {
            return (
              <Accordion.Item
                key={index}
                eventKey={index + 1}
                style={{
                  margin: 16,
                }}
              >
                <Accordion.Header
                  onClick={() => {
                    getcomments(index);
                  }}
                  key={item + index}
                >
                  {item.title}
                </Accordion.Header>
                <Accordion.Body key={item}>
                  {item.body}
                  {comments.map((item, index) => {
                    return (
                      <p key={index} style={{ color: "blue" }}>
                        {item.user.username} : {item.body}
                      </p>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </InfiniteScroll>
      </Accordion>
    </>
  );
}

export default AccordionComponent;

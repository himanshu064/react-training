import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "../index.css";
const Infinite = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [comment, setComment] = useState([]);
  let url = `https://dummyjson.com/comments?limit=${limit}&skip=${skip}`;
  const fetchComment = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setComment(data.comments);
  };
  useEffect(() => {
    fetchComment();
  }, [skip]);
  const fetchMoreData = async () => {
    let newLimmit = 10 + limit;
    const newUrl = `https://dummyjson.com/comments?limit=${newLimmit}`;
    console.log(newUrl);
    const response = await fetch(newUrl);
    const data = await response.json();
    setComment(data.comments);
    setLimit(newLimmit);
  };
  return (
    <>
      <h1 className="text-center pt-4">Comment task :- Infinite scrollable</h1>
      <section className="container mt-4">
        <div class="accordion" id="accordionExample">
          <InfiniteScroll
            dataLength={comment.length}
            next={fetchMoreData}
            hasMore={comment.length < 340 ? true : false}
            loader={<h4>Loading...</h4>}
          >
            {comment.map((item) => {
              const { body, id, user } = item;
              const { username } = user;
              return (
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item mt-4">
                    <h2 class="accordion-header" id={`flush-heading${id}`}>
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${id}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${id}`}
                      >
                        {username}
                      </button>
                    </h2>
                    <div
                      id={`flush-collapse${id}`}
                      class="accordion-collapse collapse"
                      aria-labelledby={`flush-heading${id}`}
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        <p>{body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </section>
    </>
  );
};
export default Infinite;

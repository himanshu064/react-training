import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "../index.css";
const Infinite = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [post, setPost] = useState([]);
  const [postComment, setPostComment] = useState([]);
  let url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
  const fetchComment = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data.posts);
  };
  useEffect(() => {
    fetchComment();
  }, [skip]);
  const fetchMoreData = async () => {
    let newLimmit = 10 + limit;
    const newUrl = `https://dummyjson.com/posts?limit=${newLimmit}`;
    console.log(newUrl);
    const response = await fetch(newUrl);
    const data = await response.json();
    setPost(data.posts);
    setLimit(newLimmit);
  };
  const HandleComment = async (id) => {
    const postUrl = `https://dummyjson.com/posts/${id}/comments`;
    const response = await fetch(postUrl);
    const data = await response.json();
    setPostComment(data.comments);
  };
  return (
    <>
      <h1 className="text-center pt-4">Comment task :- Infinite scrollable</h1>
      <section className="container mt-4">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <InfiniteScroll
            dataLength={post.length}
            next={fetchMoreData}
            hasMore={post.length < 340 ? true : false}
            loader={<h4>Loading...</h4>}
          >
            {post.map((item) => {
              const { body, title, id } = item;
              return (
                <div class="accordion-item mt-4">
                  <h2 class="accordion-header" id={`flush-heading${id}`}>
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${id}`}
                      aria-expanded="false"
                      aria-controls={`flush-collapse${id}`}
                      onClick={() => HandleComment(id)}
                    >
                      {title}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${id}`}
                    class="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${id}`}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <span className="Post-body pb-3">Post :- </span>
                      <p>{body}</p>
                      <h1
                        className="text-center"
                        style={{ fontSize: "1.7rem" }}
                      >
                        Comment's
                      </h1>
                      {postComment.map((item) => {
                        const { body, user, id } = item;
                        const { username } = user;
                        return (
                          <div
                            className="d-flex justify-content-between align-items-center comment"
                            key={id}
                          >
                            <h1 style={{ color: "#ff7043" }}>{username}</h1>
                            <h2 style={{ color: "#66bb6a" }}>{body}</h2>
                          </div>
                        );
                      })}
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

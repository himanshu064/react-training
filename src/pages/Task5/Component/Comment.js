import React, { useEffect, useState } from "react";
import "../index.css";
const Comment = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [post, setPost] = useState([]);
  const [jump, setJump] = useState(0);
  const [postComment, setPostComment] = useState([]);
  const perPage = [0, 15, 25, 50, 70, 100];
  let url = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
  const fetchPost = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPost(data.posts);
  };
  const HandleChange = (event) => {
    const LIMIT = parseInt(event.target.value);
    let newLimit = LIMIT;
    setLimit(newLimit);
    setJump(event.target.value);
  };
  const HandleComment = async (id) => {
    const postUrl = `https://dummyjson.com/posts/${id}/comments`;
    const response = await fetch(postUrl);
    const data = await response.json();
    setPostComment(data.comments);
  };
  useEffect(() => {
    fetchPost();
  }, [skip, limit]);

  return (
    <>
      <h1 className="text-center pt-4">Comment task</h1>
      <section className="container mt-4">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {post.map((item) => {
            const { body, id, title } = item;
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
                    <span className="Post-body"> Post :-</span> <p>{body}</p>
                    <h1 className="text-center" style={{ fontSize: "1.7rem" }}>
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
        </div>

        <div className="d-flex justify-content-end mt-4 mb-3 page-btn">
          <select
            className="form-select mx-3"
            aria-label="Default select example"
            value={jump}
            onChange={HandleChange}
          >
            {perPage.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          <button
            className="btn btn-primary"
            onClick={() => setSkip(skip - limit)}
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="btn btn-primary mx-4"
            onClick={() => setSkip(limit + skip)}
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </section>
    </>
  );
};
export default Comment;

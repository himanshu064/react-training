import React, { useEffect, useState } from "react";
import "../index.css";
const Comment = () => {
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
  return (
    <>
      <h1 className="text-center pt-4">Comment task</h1>
      <section className="container mt-4">
        <div class="accordion" id="accordionExample">
          {comment.map((item) => {
            const { body, id, user } = item;
            const { username } = user;
            return (
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item mt-4">
                  <h2 class="accordion-header" id={`flush-heading${id}`}>
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${id}`}
                      aria-expanded="true"
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
        </div>
        <div className="d-flex justify-content-end mt-4 page-btn">
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

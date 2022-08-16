import React, { useEffect, useState } from "react";
import "../index.css";
const Comment = () => {
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [comment, setComment] = useState([]);
  const [jump, setJump] = useState(0);
  const perPage = [0, 15, 25, 50, 70, 100];
  let url = `https://dummyjson.com/comments?limit=${limit}&skip=${skip}`;
  const fetchComment = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setComment(data.comments);
  };
  const HandleChange = (event) => {
    const LIMIT = parseInt(event.target.value);
    let newLimit = LIMIT;
    setLimit(newLimit);
    setJump(event.target.value);
  };
  useEffect(() => {
    fetchComment();
  }, [skip, limit]);

  return (
    <>
      <h1 className="text-center pt-4">Comment task</h1>
      <section className="container mt-4">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {comment.map((item) => {
            const { body, id, user } = item;
            const { username } = user;
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

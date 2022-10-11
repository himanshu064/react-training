import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import "./style.css";
const ShortenUrl = () => {
  const getHistory = () => {
    if (JSON.parse(localStorage.getItem("visitedLink")) === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("visitedLink"));
    }
  };
  const [urlToShorten, setUrlToShorten] = useState("");
  const [show, setShow] = useState(false);
  const [shortenUrl, setShortenUrl] = useState("");
  const [AllUrl, setAllUrl] = useState(getHistory());
  const [id, setId] = useState("");
  let baseUrl = `http://localhost:3000/`;
  const HandleShortenUrl = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 8);
    let url = `${baseUrl}${small_id}`;
    setShortenUrl(url);
    setShow(true);
    setUrlToShorten("");
    let item = {
      id: small_id,
      fullUrl: urlToShorten,
      url: url,
    };
    let data = [...AllUrl, item];
    setAllUrl(data);
    setId(small_id);
    localStorage.setItem("visitedLink", JSON.stringify(data));
  };
  const HandleCopyToClipBoard = () => {
    navigator.clipboard.writeText(shortenUrl);
  };

  const HandleRedirect = () => {
    const mainlUrl = AllUrl.find((item) => item.id === id);
    // to open link in new tab
    window.open(mainlUrl.fullUrl, "_blank");
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center p-3 heading">Shorten your url</h1>
        <div className="p-3">
          <form className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="enter the url"
              className="form-control"
              value={urlToShorten}
              onChange={(e) => setUrlToShorten(e.target.value)}
            />
            <button className="btn btn-primary mx-3" onClick={HandleShortenUrl}>
              shorten url
            </button>
          </form>
        </div>
        {show === true ? (
          <div className="shorten-url mt-4">
            <h1 className="shorten-link" onClick={HandleRedirect}>
              {shortenUrl}
            </h1>
            <button
              className="btn btn-primary copy"
              onClick={HandleCopyToClipBoard}
            >
              copy to clipboard
            </button>
          </div>
        ) : (
          <h1 className="shorten-link">enter link to shorten</h1>
        )}
        <Link to="history" className="visited-link">
          visited link
        </Link>
      </div>
    </>
  );
};

export default ShortenUrl;

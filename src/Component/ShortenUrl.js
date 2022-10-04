import React, { useState } from "react";
import { useShortenUrl } from "react-shorten-url";
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
  const [shortenUrl, setShortenUrl] = useState("");
  const [visitedLink, setVisitedLink] = useState(getHistory());
  const [show, setShow] = useState(false);
  const { data } = useShortenUrl(urlToShorten);
  const HandleShortenUrl = (event) => {
    event.preventDefault();
    setShortenUrl(data.link);
    setShow(true);
    setUrlToShorten("");
    let history = [...visitedLink, data.link];
    setVisitedLink(history);
    localStorage.setItem("visitedLink", JSON.stringify(history));
  };

  const HandleCopyToClipBoard = () => {
    navigator.clipboard.writeText(shortenUrl);
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
            <a href={shortenUrl} className="shorten-link">
              {shortenUrl}
            </a>
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

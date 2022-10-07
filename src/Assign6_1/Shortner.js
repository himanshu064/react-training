import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import "./style.css";

const Shortner = () => {
  const getHistory = () => {
    if (JSON.parse(localStorage.getItem("visitedLink")) === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("visitedLink"));
    }
  };
  const [input, setInput] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [AllUrl, setAllUrl] = useState(getHistory());
  const [id, setId] = useState("");
  //Handle Change
  let baseUrl = window.location.href;
  const HandleChange = (e)=>{
    setInput(e.target.value);
  }
  //Handle Shorting The Url
  const ShortUrl = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 5);
    let url = `${baseUrl}${small_id}`;
    setShortenedLink(url);
    setInput("");
    let item = {
      id: small_id,
      fullUrl: input,
      url: url,
    };
    let data = [...AllUrl, item];
    setAllUrl(data);
    setId(small_id);
    localStorage.setItem("visitedLink", JSON.stringify(data));
  };
  //Handle Copy
  const HandleCopy = () => {
    navigator.clipboard.writeText(shortenedLink);
  };
// Handle Redirect To New Window
  const HandleRedirect = () => {
    const mainlUrl = AllUrl.find((item) => item.id === id);
    // window.location = mainlUrl.fullUrl;
    window.open(mainlUrl.fullUrl,'_blank');
  };
  return (
    <>
      <div className="header">
        <h2>Shortener</h2>
        <Link to='/history'>
        <button className='history'>History</button>
        </Link>
    </div>
    <div className="body">
        <h1>URL Shortner</h1>
        <p>Shortner is free tool to shorten URLs. Short, memorable link in seconds</p>
        <input className='text' onChange={HandleChange} value={input} type="text" placeholder='Enter link here' />
        <button className='btn' onClick={ShortUrl}>Short URL</button>
        {shortenedLink.length > 1 ? (
            <>
            <h2 className='link'>Your Shorten Link</h2>
            <div className='footer'> 
             <h3 onClick={HandleRedirect}> {shortenedLink}</h3> 
            <i onClick={HandleCopy} className="fa-solid fa-copy"></i>
            </div>
            </>
          ):('')   
         }
    </div>
    </>
  );
};

export default Shortner;
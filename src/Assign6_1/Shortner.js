import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { v4 as uuid } from "uuid";

const Shortner = () => {
    const [input, setInput] = useState("");
    const [shortenedLink, setShortenedLink] = useState('');

  var url;
  let BothUrl = localStorage.getItem("BothUrl");
  if (BothUrl === null) {
    url = [];
  } else {
    url = JSON.parse(BothUrl);
  }
  const HandleChange = (e) =>{
        setInput(e.target.value)
    }
  useEffect(() => {
    updateData();
    const url = window.location.href;
    const [id, ...rest] = url.split("").reverse().join("").split("/");
    if (id) {
      const foundObject = history.find((item) => {
        return item.shortUrl === `${window.location.href}`;
      });
      window.location.href = foundObject.fullURL;
    }
  }, [shortenedLink]);

  const [history, setHistory] = useState(url);
  const ShortUrl = async (e) => {
    if (input !== "") {
      let shortlink = RandomString();
      console.log(shortlink,'short')
      const newdata = [...history];
      newdata.map((item) => {
        if (item.fullURL === input) {
          shortlink = item.shortUrl;
        }
      });
      let response;
      if (shortlink.includes(window.location.href)) {
        response = shortlink;
      } else {
        response = `${window.location.href}${shortlink}`;
      }
      setShortenedLink(response);
    }
  };
  function RandomString() {
    const unique_id = uuid();
    const small_id = unique_id.slice(0, 6);
    return small_id;
}
  const HandleCopy = async () => {
    return await navigator.clipboard.writeText(shortenedLink);
  };
  const openInNewTab = (code) => {
    const link = openUrl(code);
    window.open(link, "_blank", "noopener noreferrer");
  };
  const openUrl = (code) => {
    const newdata = [...history];
    let response;
    newdata.map((item) => {
      if (item.shortUrl === code) {
        return (response = item.fullURL);
      }
    });
    return response;
  };
  const updateData = () => {
    const finder = history.find((obj) => {
      return obj.fullURL === input;
    });
    if (finder === undefined) {
      if (input) {
        const newData = [
          ...history,
          {
            shortUrl: shortenedLink,
            fullURL: input,
          },
        ];
        setHistory(newData);
        localStorage.setItem("BothUrl", JSON.stringify(newData));
      }
    }
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
            <a
            href={openUrl(shortenedLink)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              openInNewTab(shortenedLink);
            }}
          >
            {shortenedLink}
          </a>
            <i onClick={HandleCopy} className="fa-solid fa-copy"></i>
            </div>
            </>
          ):('')   
         }
    </div>
    </>
  )
}

export default Shortner;

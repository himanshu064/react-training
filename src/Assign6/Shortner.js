import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './style.css';

const Shortner = () => {
    const getVisited = () => {
        if (JSON.parse(localStorage.getItem("links")) === null) {
          return [];
        } else {
          return JSON.parse(localStorage.getItem("links"));
        }
      };
    const shortenLinks = () => {
        if (JSON.parse(localStorage.getItem("shortenLinks")) === null) {
          return [];
        } else {
          return JSON.parse(localStorage.getItem("shortenLinks"));
        }
      };
    const [input, setInput] = useState("");
    const [shortenedLink, setShortenedLink] = useState(shortenLinks());
    const [history,setHistory] = useState (getVisited());
    
    const HandleChange = (e) =>{
        setInput(e.target.value)
    }
    const fetchData = async () => {
        try {
            const response = await axios(
                `https://api.shrtco.de/v2/shorten?url=${input}`
                );
                setShortenedLink(response.data.result.full_short_link);
                let data = [...history,response.data.result.full_short_link];
                setHistory(data);    
        } catch (e) {
          console.log(e);
        }
    };
    const HandleShortUrl = () =>{
          fetchData();
    }
    const HandleCopy = () =>{
        navigator.clipboard.writeText(shortenedLink); 
    }
    localStorage.setItem("links",JSON.stringify(history));
    localStorage.setItem("shortenLinks",JSON.stringify(shortenedLink));

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
        <button className='btn' onClick={HandleShortUrl}>Short URL</button>
        {shortenedLink.length > 1 ? (
            <>
            <h2 className='link'>Your Shorten Link</h2>
            <div className='footer'>{shortenedLink}
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

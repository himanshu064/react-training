import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import styles from "./index.module.css";
import PopUp from "./PopUp";

const Assignment6 = () => {
  const [shortenedLink, setShortenedLink] = useState("");
  const [userInput, setUserInput] = useState("");
  const [modalShow, setModalShow] = useState(false);
  var codes;
  let storage = localStorage.getItem("shortcodes");
  if (storage === null) {
    codes = [];
  } else {
    codes = JSON.parse(storage);
  }
  useEffect(() => {
    updateData();
    const url = window.location.href;
    const [id, ...rest] = url.split("").reverse().join("").split("/");
    if (id) {
      const foundObject = data.find((item) => {
        return item.shortcode === `${window.location.href}`;
      });
      window.location.href = foundObject.fullURL;
    }
  }, [shortenedLink]);

  const [data, setData] = useState(codes);
  const makeitShort = async (e) => {
    if (userInput !== "") {
      let shortlink = makeRandom();
      const newdata = [...data];
      newdata.map((item) => {
        if (item.fullURL === userInput) {
          shortlink = item.shortcode;
        }
      });
      let response;
      if (shortlink.includes(window.location.href)) {
        response = shortlink;
      } else {
        response = `${window.location.href}${shortlink}`;
      }
      // db.ref("urlData")
      //   .set({
      //     shortcode: response,
      //     fullURL: userInput,
      //   })
      //   .catch(alert);
      setShortenedLink(response);
    }
  };
  function makeRandom() {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const copyToClipboard = async () => {
    return await navigator.clipboard.writeText(shortenedLink);
  };
  const openInNewTab = (code) => {
    const link = openUrl(code);
    window.open(link, "_blank", "noopener noreferrer");
  };
  const openUrl = (code) => {
    const newdata = [...data];
    let response;
    newdata.map((item) => {
      if (item.shortcode === code) {
        return (response = item.fullURL);
      }
    });
    return response;
  };
  const updateData = () => {
    const finder = data.find((obj) => {
      return obj.fullURL === userInput;
    });
    if (finder === undefined) {
      if (userInput) {
        const newData = [
          ...data,
          {
            shortcode: shortenedLink,
            fullURL: userInput,
          },
        ];
        setData(newData);
        localStorage.setItem("shortcodes", JSON.stringify(newData));
      }
    }
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.historyBtn}>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          History
        </Button>
        <PopUp
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={data}
        />
      </div>
      <div className={styles.mainText}>URL Shortner</div>
      <div>
        <InputGroup className={styles.inputFields}>
          <Form.Control
            placeholder="Enter Your Link Here"
            aria-label="Your Link"
            aria-describedby="basic-addon2"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={() => {
              makeitShort();
            }}
          >
            Short Url
          </Button>
        </InputGroup>
      </div>
      <div className={styles.textDiv}>Your Shortner Link </div>
      <div className={styles.outputDiv}>
        <div className={styles.outputText}>
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
        </div>
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={() => {
            copyToClipboard();
          }}
          className={styles.outputBtn}
        >
          {" "}
          Copy to clipboard
        </Button>
      </div>
    </div>
  );
};

export default Assignment6;

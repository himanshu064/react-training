import React from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "./index.module.css";

function PopUp(props) {
  const openInNewTab = (shortcode) => {
    window.open(shortcode, "_blank", "noopener noreferrer");
  };
  const copyToClipboard = async (shortcode) => {
    return await navigator.clipboard.writeText(shortcode);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">History</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data.map((item, index) => {
          return (
            <div
              className={styles.outputDiv}
              style={{ marginBottom: "5px" }}
              key={index}
            >
              <div className={styles.outputText}>
                <a
                  href={item.shortcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    openInNewTab(item.shortcode);
                  }}
                >
                  {item.shortcode}
                </a>
                <p className={styles.para}>Full Url : {item.fullURL}</p>
              </div>
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={(e) => {
                  copyToClipboard(item.shortcode);
                }}
                className={styles.outputBtn}
              >
                {" "}
                Copy to clipboard
              </Button>
            </div>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default PopUp;

import React, { useRef, useState } from "react";
import { button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function CopyEmail() {
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess("Succesfully copied email address!");
  }

  return (
    <div>
      {/* Logical shortcut for only displaying the 
          button if the copy command exists */
      document.queryCommandSupported("copy") && (
        <div>
          <div className="copy-success">{copySuccess}</div>
          <button
            className="btn btn-secondary rooms-btn"
            variant="primary"
            onClick={copyToClipboard}
          >
            Email Us
          </button>
        </div>
      )}
      <form className="email-form">
        <textarea
          cols="29"
          ref={textAreaRef}
          value="midnightgallery01@gmail.com"
        />
      </form>
    </div>
  );
}

export default CopyEmail;

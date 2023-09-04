// AutoExpandTextArea.js
import React, { useRef, useEffect } from "react";

const AutoExpandTextArea = ({ value, onChange, className, maxLength, type }) => {
  const textareaRef = useRef(null);

  const resizeTextArea = () => {
    const textArea = textareaRef.current;
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  useEffect(() => {
    const textArea = textareaRef.current;

    textArea.addEventListener("input", resizeTextArea);
    window.addEventListener("resize", resizeTextArea);

    // Wywołaj raz przy montowaniu, aby dostosować wysokość
    resizeTextArea();

    return () => {
      textArea.removeEventListener("input", resizeTextArea);
      window.removeEventListener("resize", resizeTextArea);
    };
  }, []);

  return (
    <textarea 
      ref={textareaRef}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      type={type}
      className={className}
      style={{ overflow: "hidden", resize: "none" }}
    ></textarea>
  );
};

export default AutoExpandTextArea;

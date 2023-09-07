import React, { useState, useRef } from "react";
import styles from "./ImageUpload.module.css";

const ImageUpload = ({ onImagesAdded ,onImageRemoved}) => {
  const fileInputRef = useRef(null);
  const [dragOver, setDragOver] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    let files = [];
    if (e.dataTransfer.items) {
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        if (e.dataTransfer.items[i].kind === "file") {
          const file = e.dataTransfer.items[i].getAsFile();
          files.push(file);
        }
      }
    }
    addImages(files);
  };

  const addImages = (files) => {
    let newImages = [...previewImages];
    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
    }
    setPreviewImages(newImages);
    onImagesAdded(files);
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleFilesAdded = (e) => {
    addImages([...e.target.files]);
  };
  const handleRemoveImage = (indexToRemove) => {
    setPreviewImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
    
    if(onImageRemoved) {
      onImageRemoved(indexToRemove);
    }
  };
  return (
    <div className={styles.imageUploader}>
      <div
        className={`${styles.images} ${dragOver ? styles.dragOver : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileInputRef.current.click()}
      >
        <p className={styles.p}>Add images</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFilesAdded}
        />
      </div>
      <div className={styles.previewContainer}>
        {previewImages.map((imgSrc, index) => (
          <div key={index} className={styles.previewWrapper}>
            <img src={imgSrc} alt="Upload Preview" className={styles.previewImage} />
            <div styles={{display:'none'}} className={styles.deleteOverlay} onClick={() => handleRemoveImage(index)}>
              Remove
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;

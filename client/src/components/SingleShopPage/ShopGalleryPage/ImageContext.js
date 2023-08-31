import React, { createContext, useContext, useState } from 'react';

const ImageContext = createContext();

export function useImageContext() {
    return useContext(ImageContext);
}

export function ImageProvider({ children }) {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageNumber) => {
        setSelectedImage(imageNumber);
    };

    return (
        <ImageContext.Provider value={{ selectedImage, handleImageClick }}>
            {children}
        </ImageContext.Provider>
    );
}

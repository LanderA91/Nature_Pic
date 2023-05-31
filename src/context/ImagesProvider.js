import React, { useEffect, useState } from "react";
import axios from "axios";
export const ImagesContext = React.createContext();

const ImagesProvider = ({ children }) => {

  const [imageGallery, setImageGallery] = useState([]);

  useEffect(() => {
    const getJsonData = async () => {
      const response = await axios.get("/fotos.json");
      setImageGallery(response.data.photos);
    };
    getJsonData();
  }, []);

  return (
    <ImagesContext.Provider value={{ imageGallery, setImageGallery }}>
      {children}
    </ImagesContext.Provider>
  );
}

export default ImagesProvider
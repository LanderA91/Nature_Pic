import Galeria from "../components/Galeria";
import React from "react";
import { ImagesContext } from "../context/ImagesProvider";

export default function Home() {
  const { imageGallery, setImageGallery } = React.useContext(ImagesContext);
  // 
  const handleFavorite = (id) => {
    setImageGallery((favoriteGallery) =>
      favoriteGallery.map((image) => {
        if (image.id === id) {
          return { ...image, liked: !image.liked }
        }
        return image
      }))
  }
  return (

    <div id="Home" className="container">
      <h1>Natural Pic</h1>

      <Galeria imageGallery={imageGallery} handleClick={handleFavorite} />
    </div>
  );
}
import React from "react";
import "../assets/css/galeria.css";
import { ImagesContext } from "../context/ImagesProvider";


export default function Favoritos() {
  const { imageGallery } = React.useContext(ImagesContext);
  const favoriteGallery = imageGallery.filter((image) => image.liked)
  // setImageGallery()
  return (
    <div className="container">
      <h1>Fotos favoritas</h1>
      {favoriteGallery.length === 0 ?
        (<div><h2>No has seleccionado fotos favoritas 😢</h2></div>) :
        (<div className="galeria grid-columns-fav p-3">
          {favoriteGallery.map((image) => (
            <div key={image.id} className="foto">
              <img src={image.src.tiny} alt={image.alt} />
            </div>
          ))}
        </div>
        )
      }
    </div>
  );
}
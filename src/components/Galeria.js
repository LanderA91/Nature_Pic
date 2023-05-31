import React from "react";
import "../assets/css/galeria.css";
import { ImagesContext } from "../context/ImagesProvider";
import Heart from "./Heart";

export default function Home({ imageGallery, handleClick }) {
  return (
    <div className="galeria grid-columns-home p-3">
      {imageGallery.map((image) => (
        <div key={image.id} className="foto" onClick={() => { handleClick(image.id) }}>
          <img src={image.src.tiny} alt={image.alt} />
          <Heart filled={image.liked} />
        </div>
      ))}
    </div>
  );
}
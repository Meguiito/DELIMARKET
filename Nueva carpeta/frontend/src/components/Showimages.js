import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";
import { Box, Grid } from "@material-ui/core";

const API = process.env.REACT_APP_API;

function Showimages() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [nfact, setNfact] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    axios.get(`${API}/Images`).then((response) => {
      setImages(response.data.images);
      setNfact(response.data.nfact);
      setId(response.data._id);
    });
  }, []);

  const handleImageClick = () => {
    document.body.style.overflow = "hidden";
  };

  const handleCloseImage = () => {
    document.body.style.overflow = "auto";
    setSelectedImage(null);
  };

  return (
     
    <Grid container spacing={1} justifyContent="center">
      {images.map((image) => (
        <Grid item xs={19} sm={21} md={35} lg={29} key={image._id} style={{border: '1px solid #442a19' }} >
          <ImageCard image={image} onImageClick={handleImageClick} />
        </Grid>
      ))}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 20)",
            display: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleCloseImage}
        >
          <img
            src={`data:image/jpeg;base64,${selectedImage.image}`}
            alt="Selected"
            style={{ maxWidth: "200%", maxHeight: "200%" }}
          />
        </div>
      )}
    </Grid>

  );
}

export default Showimages;
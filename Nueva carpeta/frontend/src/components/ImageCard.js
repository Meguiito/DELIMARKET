import React, { useState } from "react";
import "./Imagecard.css";
import axios from "axios";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  ButtonGroup,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"
const API = process.env.REACT_APP_API;

const ImageCard = ({ image, nfact }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    const res = fetch(`${API}/Images/${image.id}`, {
      method: 'DELETE'
    })
    .then(res => {
      handleClose();
      window.location.reload();
    })
    .catch(error => console.log(error));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDownload = () => {
    axios({
      url: `${API}/Images/${image.id}`,
      method: "GET",
      responseType: "blob"
    }).then(response => {
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `factura-${image.nfact}.jpg`);
      link.click();
    });
  };
  return (
    <center>
    <div class="card">
      <div class="card-body">
          <CardContent>
          <Typography variant="h5" component="div">Número de factura: {image.nfact}</Typography>
        </CardContent>
      <Card
        key={image._id}
        style={{ maxWidth: 200, maxHeight: 200, margin: 10 }}
>
      
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          width="200"
          image={`data:image/jpeg;base64,${image.image}`}
          title={`data:image/jpeg;base64,${image.image}`}
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        />
        
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <img
          src={`data:image/jpeg;base64,${image.image}`}
          alt="Imagen factra"
          style={{ width: "150%", height:"100%" }}
        />
      </Dialog>
      <CardContent>
      <ButtonGroup>
        <Button startIcon={<SaveIcon/>}
        className="download-button"
        size="large"
        color="primary"
        variant="contained"
        onClick={() => handleDownload(image.id)}
        >
          
        Descargar
         
        </Button>
        <Button color="primary" size="large" className="deleteo-button" variant="contained" startIcon={<DeleteIcon />} onClick={handleDelete}>
          Eliminar
        </Button>
        </ButtonGroup>
      </CardContent>
        </div>
      </div>
      </center>
  );
};

export default ImageCard;
import React from "react";
import './css/style.css';
import photo from "./image/photo.jpg";

const Photo = () => {return (

<section className="photo-style">

<img src={photo} alt ='imagefrom src' width="240" height="240"/>
               
</section>
        )
};
export default Photo;
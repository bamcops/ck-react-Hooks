import React from "react";
import { useParams } from "react-router-dom";
import { MovieData } from "../constant/Data";


function Trailer() {
    const params=useParams()
    
    const foundMovie= MovieData.find(el=>el.id==params.id)
    //console.log(foundMovie);
  return <div>
      <h1>title :{foundMovie.title}</h1>
      
  </div>;
};

export default Trailer;

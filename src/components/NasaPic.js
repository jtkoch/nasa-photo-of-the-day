import React from "react"; 

const NasaPic = (props) => {
  return(
      <div className = "nasaPicture" key = {props.date}>
          <img className = "Photo" src= {props.url} alt="space" />
          <h1>{props.title}</h1>
          <p>{props.explanation}</p>
      </div>
  )
}
export default NasaPic; 
import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaPic from "./components/NasaPic";
import styled from "styled-components";

const ApodTitle = styled.div ` 
  text-align: center;
  background-color: black;
  color: maroon;
  font-size: 70px;
  font-family: 'Odibee Sans', cursive;
`;

function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=GAZaFR3y21FBeRsNzHdFwYGrzkqgzhNktUAUG7ff')
      .then(response => {
        console.log(response.data);
        setNasaData(response.data);
      })
      .catch(error => {
        console.log("There was no data!", error);
      });
  }, []);

  return (
    <nasaTitle className="App">
      <ApodTitle>NASA PHOTO OF THE DAY</ApodTitle>
      <NasaPic date={nasaData.date} title={nasaData.title} explanation={nasaData.explanation} url={nasaData.hdurl} />
    </nasaTitle>
  );
}

export default App;
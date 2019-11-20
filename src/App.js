import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import NasaPic from "./components/NasaPic";

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
    <div className="App">
      <header><h1>NASA PHOTO OF THE DAY</h1></header>
      <NasaPic date={nasaData.date} title={nasaData.title} explanation={nasaData.explanation} url={nasaData.hdurl} />
    </div>
  );
}

export default App;
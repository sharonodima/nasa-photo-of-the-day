import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./Components/NasaPhoto";


function App() {
  const [data, setData] = useState();
  useEffect (() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=q38xH01AefB5EUaEqt8hXQwGJLRGhTFa3M4PvaKF")
    .then(res => {
      console.log(res);
      setData(res.data);
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
        {data && <NasaPhoto photo = {data} />}
    </div>
  );
}


export default App;


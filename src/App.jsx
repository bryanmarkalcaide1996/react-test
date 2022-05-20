import React, { useEffect, useState } from "react";
import "./App.css";
import Flights from "./components/FlightPage/Flights";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const url = "https://api.spacexdata.com/v3/launches";

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        setTimeout(() => {
          setApiData(data);
          setIsLoading(false);
        }, 1000)
      );
  }, [setApiData]);

  return (
    <div className="main__wrapper">
      {isLoading ? <Spinner /> : <Flights apiData={apiData} />}
    </div>
  );
}

export default App;

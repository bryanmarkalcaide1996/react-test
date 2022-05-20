import React, { useEffect, useState } from "react";
import FlightCard from "../FlightCard/FlightCard";

function Flights({ apiData }) {
  const [finalData, setFinalData] = useState(apiData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const f = apiData.filter(({ mission_name }) =>
      mission_name.startsWith(query)
    );
    query ? setFinalData(f) : setFinalData(apiData);
  }, [query, apiData]);

  return (
    <div>
      <input
        type="search"
        className="search"
        placeholder="Search..."
        onChange={(e) => {
          const { value } = e.target;
          setQuery(value);
        }}
      />

      <div className="launch__wrapper">
        {finalData.map((flight) => (
          <FlightCard key={flight.flight_number} flight={flight} />
        ))}
      </div>
    </div>
  );
}

export default Flights;

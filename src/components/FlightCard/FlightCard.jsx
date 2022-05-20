import React, { useState } from "react";

function FlightCard({ flight }) {
  const {
    mission_name,
    upcoming,
    launch_year,
    launch_success,
    links: { mission_patch_small },
  } = flight;

  const [toggle, setToggle] = useState(false);

  return (
    <article className={`${toggle && "launch"}`}>
      <section>
        <h2>{mission_name}</h2>
        <span>
          {upcoming ? "upcoming" : launch_success ? "Success" : "Failed"}
        </span>
      </section>

      <section className="mission_details">
        {toggle && (
          <div>
            <figure>
              <img src={mission_patch_small} alt={mission_name} />
            </figure>
            <span>
              {upcoming
                ? "in a year"
                : `${new Date().getFullYear() - launch_year} years ago`}
            </span>
            {!launch_success && <p>{flight.launch_failure_details.reason}</p>}
          </div>
        )}

        <button
          className="btn btn--primary"
          type="button"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {toggle ? "hide" : "view"}
        </button>
      </section>
    </article>
  );
}

export default FlightCard;

import React from "react";

const Weatherinfo = (props) => (
      <div className="infoWeath">
        { props.city &&
          <div>
            <p>Location: {props.city}, {props.country}</p>
            <p>Temperature:{props.temp}</p>
            <p>Pressure:{props.pressure}</p>
          </div>
         }
         <p className="error"> {props.error}</p>

      </div>
    );

export default Weatherinfo;

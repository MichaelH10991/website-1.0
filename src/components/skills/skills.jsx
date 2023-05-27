import React from "react";

import Card from "./skill/Card";
import "./skills.css";

export const Skills = (props) => {
  return (
    <div id="skills" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Skills</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-6 col-md-3">
                  {/* <i className={d.icon}></i> <h3>{d.name}</h3>
                  <p>{d.text}</p> */}
                  <Card
                    name={d.name}
                    level={d.level}
                    additionalInfo={d.additionalInfo}
                    links={d.links}
                    rating={d.rating}
                  />
                  {/* <Card1 name={d.name} level={d.level} rating={d.rating} /> */}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};

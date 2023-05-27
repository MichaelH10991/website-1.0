import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import Rating from "./Rating";
import List from "./List";

import "./skills.css";

const style = {
  backgroundColor: "#c81010",
  // background: "linear-gradient(to right, #9d0101 0%, #ff2b2b 100%);",
  background: "#ff3826",
  color: "#fff",
  borderRadius: 30 + "px",
};

export default function BasicCard(props) {
  const { name, level, additionalInfo, links, rating } = props;
  const [flipped, setFlipped] = useState(false);
  console.log("here");

  return (
    <div className={`card ${flipped ? "flip" : ""}`}>
      <Card sx={style} className="front" onClick={() => setFlipped(!flipped)}>
        <CardContent>
          <Typography variant="h3" component="div">
            {name}
          </Typography>
          <Typography variant="h4" color="#b0afaf">
            {level}
          </Typography>
          <Rating rating={rating} />
        </CardContent>
      </Card>
      <Card sx={style} className="back" onClick={() => setFlipped(!flipped)}>
        <CardContent>
          <Typography variant="h4" color="#b0afaf">
            Projects
          </Typography>
          <Typography>
            <List links={links} />
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}

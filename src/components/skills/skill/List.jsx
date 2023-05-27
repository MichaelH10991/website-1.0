import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

import ListItemIcon from "@mui/material/ListItemIcon";
import GitHubIcon from "@mui/icons-material/GitHub";

import "./skills.css";

const ProjectList = ({ links }) => {
  return (
    <List dense={true}>
      {links.map(({ name, link }) => (
        <ListItem>
          <ListItemIcon>
            <GitHubIcon sx={{ fontSize: 30 + "px" }} color="primary" />
          </ListItemIcon>
          <Button
            sx={{ fontSize: 15 + "px", color: "white" }}
            size="large"
            variant="text"
            target="_blank"
            href={link}
          >
            {name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default ProjectList;

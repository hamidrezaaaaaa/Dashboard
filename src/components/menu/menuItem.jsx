import React, { useEffect, useState } from "react";

// @material-ui
import Icon from "@mui/material/Icon";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// external
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

// internal
import { useStyles } from "../../style";

const MenuItem = ({ label, icon, activeIcon, path, onClick }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const classes = useStyles();

  useEffect(() => {
    if (path === "/sign-out") {
      setActive(true);
      return;
    }
    setActive(location.pathname === path);
  }, [location, path]);

  return (
    <ListItem
      button
      component={Link}
      to={path}
      className={clsx(classes.menuItem, active && classes.menuItemActive)}
      onClick={onClick}
    >
      <ListItemIcon>
        <Icon>
          <img
            className={classes.menuItemIcon}
            src={active ? activeIcon : icon}
            alt={label}
          />
        </Icon>
      </ListItemIcon>
      <ListItemText
        className={classes.menuItemText}
        primary={label}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItem>
  );
};

export default MenuItem;

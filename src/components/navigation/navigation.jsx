import React, { useState } from "react";
import MenuItems from "../menu/menuItem";
import routes from "../../routes";

//assets
import Logo1 from "../../assets/Logo1.svg";
import Logo2 from "../../assets/Logo2.svg";

//material-ui
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import { ChevronRight } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import {
    AppBar,
    Toolbar,
    Typography,
  } from "@mui/material";
  import { useTheme } from '@mui/material/styles';
  import useMediaQuery from '@mui/material/useMediaQuery';

//style
import { useStyles } from "../../style";
import clsx from "clsx";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const toggleNavigation = () => {
    setOpen(!open);
  };

  const closeNavigation = () => {
    if (!matches) {
      setOpen(false);
    }
  };

  return (
    <div>
        <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            aria-label="Menu"
          >
            <Menu />
          </IconButton>
          <Typography color="inherit" component="h1" variant="h6" sx={{paddingX:2}}>
            brand
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
        variant={matches ? "permanent":"temporary"  }
        open={open}
        anchor="right"
      >
        <div
          className={clsx(
            classes.navigationToolbar,
            !open && classes.navigationToolbarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronRight /> : <Menu />}
          </IconButton>
        </div>

        <div className={classes.navigationLogoContainer}>
          <img
            className={classes.navigationLogo}
            src={open ? Logo1 : Logo2}
            alt="logo"
          />
        </div>

        <List className={classes.navigationList}>
          {routes.map((route, index) => {
            return (
              <React.Fragment>
                {route.path === "/sign-out" && (
                  <div className={classes.navigationSpacer}></div>
                )}
                <MenuItems
                
                  label={route.label}
                  icon={route.icon}
                  activeIcon={route.activeIcon}
                  path={route.path}
                  onClick={closeNavigation}
                />
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </div>
  );
};

export default Navigation;

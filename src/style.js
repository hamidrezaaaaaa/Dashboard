import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
   

  appRoot: {
    display: "flex",
  },
  appBar: {
    background: "#6EC177 !important",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  appBarSpacer: {
    [theme.breakpoints.down("xs")]: {
      ...theme.mixins.toolbar,
    },
  },
  navigationLogo: {
    width: "50%",
    cursor: "pointer",
  },
  navigationLogoContainer:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navigationDrawer: {
    width: 240,
    border: "none",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    position: "relative !important",
    height: "100vh !important",
  },
  navigationDrawerCollapse: {
    width: theme.spacing(9),
  },
  navigationToolbar: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: theme.spacing(1),
    ...theme.mixins.toolbar,
  },
  navigationToolbarCollapse: {
    justifyContent: "center",
    paddingRight: 0,
  },
  navigationList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  navigationSpacer: {
    flex: 1,
  },
  menuItemIcon: {
    width: "100%",
  },
  menuItem: {
    width: "80% !important",
    borderRadius: theme.spacing(1) +'!important',
    marginBottom: theme.spacing(1)+'!important',
  },
  menuItemText:{
    textAlign:'right',
  },
  menuItemActive: {
    backgroundColor: "#EBEBEC !important",
  },
}));
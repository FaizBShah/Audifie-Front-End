import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tab } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

//  <---------------------------------------------------------UTILITY COMPONENTS------------------------------------------------------------------->

// PRIMARY BUTTON
export const PrimaryButton = withStyles({
  root: {
    // width: "100%",
    backgroundColor: '#fd5457',
    fontFamily: "'Comfortaa', cursive",
    fontWeight: '500',
    // borderColor: "#fd5457",
    borderRadius: '50px',
    color: '#fff',
    fontSize: '1rem',
    display: 'flex',
    justifyContent: 'space-around',
    '&:hover': {
      backgroundColor: '#fd5457',
      color: '#fff',
      opacity: '0.9',
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

//  <---------------------------------------------------------NAVBAR------------------------------------------------------------------->

// MAIN NAVBAR
export const NavAppBar = withStyles({
  root: {
    position: 'sticky',
    backgroundColor: '#1d1d1d',
    boxShadow: ' 0 8px 6px -6px black',
  },
})(AppBar);

export const NavToolBar = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})(Toolbar);

//  <---------------------------------------------------------FOOTER------------------------------------------------------------------->

// FOOTER ICONS
export const FooterIcon = withStyles({
  root: {
    color: '#cfd0d0',
    margin: '1.2rem .6rem 1rem',
    '&:hover': {
      opacity: '0.8',
    },
  },
})(Icon);

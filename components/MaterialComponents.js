import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Drawer, TextField } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

//  <---------------------------------------------------------UTILITY COMPONENTS------------------------------------------------------------------->

// PRIMARY BUTTON
export const PrimaryButton = withStyles({
  root: {
    // width: "100%",
    backgroundColor: '#fd5457',
    fontFamily: "'Comfortaa', cursive",
    fontWeight: '600',
    // borderColor: "#fd5457",
    border: '2px solid #FD5457',
    borderRadius: '50px',
    color: '#fefefe',
    fontSize: '1.15rem',
    display: 'flex',
    boxShadow: ' 0 8px 6px -6px black',
    justifyContent: 'space-around',
    '&:hover': {
      backgroundColor: '#FD545705'
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

// FORM INPUTS
export const PrimaryInput = withStyles({
  root: {
    width: "100%",
    '& .MuiInputBase-input': {
      color: "#fff",
    },
    '& label': {
      color: "#fd5457",
    },
    '& label.Mui-focused': {
      color: '#fd5457',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fd5457',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
      '& fieldset': {
        borderColor: '#fd5457',
      },
      '&:hover fieldset': {
        borderColor: '#fd5457',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fd5457',
      },
    },
  }
})(TextField);

//  <---------------------------------------------------------NAVBAR------------------------------------------------------------------->

// MAIN NAVBAR
export const NavAppBar = withStyles({
  root: {
    position: 'sticky',
    backgroundColor: '#141517',
    boxShadow: '0 8px 6px -6px black',
    ['@media (max-width:768px)']: {
      position: 'relative',
      boxShadow: 'none',
    }
  },
})(AppBar);

export const NavToolBar = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})(Toolbar);

// NAVBAR DRAWER
export const NavDrawer = withStyles({
  root: {
    width: '100vw',
    textAlign: 'center'
  },
  paper: {
    backgroundColor: '#1d1d1d',
    width: '100vw',
    borderRadius: '20px 20px 0 0',
    boxShadow: ' 0 8px 6px -6px black'
  }
})(Drawer);

//  <---------------------------------------------------------FOOTER------------------------------------------------------------------->

// FOOTER ICONS
export const FooterIcon = withStyles({
  root: {
    color: '#c4c4c4',
    margin: '1.2rem .6rem 0.5rem',
    '&:hover': {
      opacity: '0.8'
    },
  },
})(Icon);

// TERMS & CONDITION
export const FooterLink = withStyles({
  root: {
    fontSize: '1rem',
    fontFamily: '"Josefin Sans", sans-serif',
    padding: '0',
    marginRight: '1.5rem',
    minWidth: '0',
    textTransform: 'capitalize',
    color: '#c4c4c4',
    opacity: '1',
    '&:hover': {
      opacity: '0.8',
    },
  },
})(Icon);

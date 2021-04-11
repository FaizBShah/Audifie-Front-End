import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Drawer, TextField, Snackbar, Backdrop } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

// <======== Root Colors ========>
const backgroundPrimary = '#141517';
const backgroundSecondary = '#1D1D1D';
const colorBranding = '#FD5457';
const textPrimary = '#FDFDFD';
const textHeading = '#FD5457';



//  <---------------------------------------------------------UTILITY COMPONENTS------------------------------------------------------------------->

// PRIMARY BUTTON
export const PrimaryButton = withStyles({
  root: {
    // width: "100%",
    backgroundColor: colorBranding,
    fontFamily: "'Comfortaa', cursive",
    fontWeight: '600',
    // borderColor: "#fd5457",
    border: '2px solid ' + colorBranding,
    borderRadius: '50px',
    color: '#fefefe',
    fontSize: '1.15rem',
    display: 'flex',
    boxShadow: ' 0 8px 6px -6px black',
    justifyContent: 'space-around',
    '&:hover': {
      backgroundColor: colorBranding + '05'
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

// Google BUTTON
export const GoogleButton = withStyles({
  root: {
    // width: "100%",
    backgroundColor:'white',
    borderRadius: '50px',
    color: 'black',
    fontSize: '1rem',
    display: 'flex',
    boxShadow: ' 0 8px 6px -6px black',
    justifyContent: 'space-around',
    padding: '0.5rem 1rem',
    '&:hover': {
      backgroundColor: 'white',
      boxShadow: 'none'
    },
  },
  label: {
    textTransform: 'capitalize',
    justifyContent: 'center'
  },
})(Button);

// Facebook BUTTON
export const FacebookButton = withStyles({
  root: {
    // width: "100%",
    backgroundColor:'#1877F2',
    borderRadius: '50px',
    color: 'white',
    fontSize: '1rem',
    display: 'flex',
    boxShadow: ' 0 8px 6px -6px black',
    justifyContent: 'space-around',
    padding: '0.5rem 1rem',
    '&:hover': {
      backgroundColor: '#1877F2',
      boxShadow: 'none'
    },
  },
  label: {
    textTransform: 'capitalize',
    justifyContent: 'center'
  },
})(Button);

// FORM INPUTS
export const PrimaryInput = withStyles({
  root: {
    width: "100%",
    '& .MuiInputBase-input': {
      color: textPrimary,
      fontFamily: "'Josefin Sans', sans-serif"
    },
    '& label': {
      color: textPrimary + 'FD',
      padding: '0 0.75rem',
      backgroundColor : backgroundPrimary,
      fontFamily: "'Josefin Sans', sans-serif"
    },
    '& label.Mui-focused': {
      color: textPrimary,
      paddingLeft: '0.25rem',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colorBranding,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '100px',
      '& fieldset': {
        borderColor: colorBranding,
      },
      '&:hover fieldset': {
        borderColor: colorBranding,
      },
      '&.Mui-focused fieldset': {
        borderColor: colorBranding,
      },
    },
    '& .MuiFormHelperText-root': {
      color: textHeading,
    },
  }
})(TextField);

// ERROR NOTIFICATION
export const ErrorNotification = withStyles({
  root: {
    '& .MuiSnackbarContent-root': {
      backgroundColor: backgroundSecondary,
      borderLeft: '5px #fd5457 solid'
    }
  }
})(Snackbar);

// LOADER BACKDROP
export const LoaderBackdrop = withStyles({
  root: {
    zIndex: '1201',
  }
})(Backdrop);

//  <---------------------------------------------------------NAVBAR------------------------------------------------------------------->

// MAIN NAVBAR
export const NavAppBar = withStyles({
  root: {
    position: 'sticky',
    backgroundColor: backgroundPrimary,
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
    backgroundColor: backgroundSecondary,
    width: '100vw',
    borderRadius: '20px 20px 0 0',
    boxShadow: ' 0 8px 6px -6px black'
  }
})(Drawer);

//  <---------------------------------------------------------FOOTER------------------------------------------------------------------->

// FOOTER ICONS
export const FooterIcon = withStyles({
  root: {
    color: textPrimary,
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
    color: textPrimary,
    opacity: '1',
    '&:hover': {
      opacity: '0.8',
    },
  },
})(Icon);

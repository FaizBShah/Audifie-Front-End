import { withStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar, 
  Button,
  Drawer, 
  TextField, 
  Snackbar, 
  Backdrop, 
  Card, 
  CardContent, 
  BottomNavigation, 
  BottomNavigationAction,
  Tabs,
  Tab,
  Dialog,
  DialogContent
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

// <======== Root Colors ========>
const backgroundPrimary = '#141517';
const backgroundSecondary = '#1D1D1D';
const colorBranding = '#FD5457';
const textPrimary = '#FDFDFD';
const textHeading = '#FD5457';
const textSecondary = "#CCCCCC";



//  <---------------------------------------------------------UTILITY COMPONENTS------------------------------------------------------------------->

// PRIMARY BUTTON
export const PrimaryButton = withStyles({
  root: {
    display: 'flex',
    padding: '4px 32px',
    backgroundColor: colorBranding,
    fontFamily: "'Comfortaa', cursive",
    fontWeight: '600',
    border: '2px solid ' + colorBranding,
    borderRadius: '50px',
    color: '#fefefe',
    fontSize: '1rem',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
    '&:hover': {
      backgroundColor: colorBranding + '05'
    },
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

// SECONDARY BUTTON
export const SecondaryButton = withStyles({
  root: {
    display: 'flex',
    padding: '4px 32px',
    backgroundColor:'#fefefe',
    fontFamily: "'Comfortaa', cursive",
    fontWeight: '600',
    border: '2px solid #fefefe',
    borderRadius: '50px',
    color: '#1d1d1d',
    fontSize: '1rem',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
    '&:hover': {
      backgroundColor: '#fefefe05',
      color: '#fefefe'
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
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
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
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
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
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
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
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)'
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


//  < -------------------------------------------------------------DASHBOARD---------------------------------------------------------------------------------------------->

// DRAWER
export const MainDrawer = withStyles({
  root: {
    width: '240px'
  },
  paper: {
    backgroundColor: backgroundSecondary,
    width: '240px'
  }
})(Drawer);

// BOTTOM NAVIGATION
export const PrimaryBottomNavigation = withStyles({
  root: {
    position: 'fixed',
    bottom: '0',
    width: '100%',
    height: '10%',
    background: backgroundSecondary
  }
})(BottomNavigation);

// BOTTOM NAVIGATION ACTION
export const PrimaryBottomNavigationAction = withStyles({
  root: {
    color: textSecondary
  },
  label: {
    marginTop: '5px',
    fontFamily: '"Josefin Sans", sans-serif'
  }
})(BottomNavigationAction);

// CARD
export const PrimaryCard = withStyles({
  root: {
    background: backgroundSecondary,
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.4)',
    borderRadius:'5px',
    width: '100%',
    height: '14rem',
  },
})(Card);

// CARD BODY
export const PrimaryCardContent = withStyles({
  root: {
   padding: '0',
   color: '#ccc',
   display: 'flex',
   height: '100%',
   '&:last-child':{
    paddingBottom:'0'
   },
  },
})(CardContent);

// PRIMARY TABS
export const PrimaryTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colorBranding,
  }
})(Tabs);

// PRIMARY TAB
export const PrimaryTab = withStyles({
  root: {
    textTransform: 'none',
    color: '#FEFEFE',
    fontFamily: '"Josefin Sans", sans-serif',
    fontSize: '1rem',
  }
})(Tab);

// PRIMARY DIALOG
export const PrimaryDialog = withStyles({
  container: {
    width: 'calc(100% - 240px)',
    marginLeft: '240px',
    ['@media (max-width:768px)']: {
      width: '100%',
      marginLeft: '0'
    }
  },
  paper: {
    backgroundColor: backgroundSecondary,
    borderRadius: '15px',
    padding: '2rem 2rem',
    marginTop: '-5rem'
  }
})(Dialog)

// PRIMARY DIALOG CONTENT
export const PrimaryDialogContent = withStyles({
  root: {
    padding: '0',
    '&:first-child': {
      paddingTop: '0'
    }
  }
})(DialogContent)
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tab } from '@material-ui/core';

// The primary button component
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

//  <---------------------------------------------------------RESPONSIVE NAVBAR------------------------------------------------------------------->

export const App_Bar = withStyles({
  root: {
    position: 'sticky',
    backgroundColor: '#1d1d1d',
    boxShadow: ' 0 8px 6px -6px black',
  },
})(AppBar);

export const Tool_Bar = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})(Toolbar);

export const Link = withStyles({
  root: {
    padding: '0',
    textTransform: 'capitalize',
    color: '#fd5457',
    opacity: '1',
    '&:hover': {
      color: '#b92e31',
      opacity: '0.9',
    },
  },
})(Tab);

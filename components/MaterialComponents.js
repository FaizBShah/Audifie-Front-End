import { Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

// The primary button component
export const PrimaryButton = withStyles({
  root: {
    width: "100%",
    backgroundColor: "#fd5457",
    borderColor: "#fd5457",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "1rem",
    display: "flex",
    justifyContent: "space-around",
    "&:hover": {
      backgroundColor: "#fd5457",
      color: "#fff",
      opacity: "0.9"
    }
  },
  label: {
    textTransform: "capitalize"
  }
})(Button);
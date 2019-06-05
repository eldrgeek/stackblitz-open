import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  textField: {
    // marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

function PostNameInput(props) {
  const classes = useStyles();

  return (
    <TextField
      label="Post Title"
      id="postnameInput"
      //defaultValue="Enter title of post"
      className={classes.textField}
      helperText=""
      onChange={props.onChange}
    />
  );
}

export default PostNameInput;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AutoButton from "./AutoButton";
import SelectList from "./SelectList";
import PostNameInput from "./PostNameInput";
import suggestions from "../Data/blogData";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: "center",
    color: theme.palette.text.secondary
  }
});

// const makeAlert = () => {
//   var frog = window.open(
//     "",
//     "wildebeast",
//     "width=300,height=300,scrollbars=1,resizable=1"
//   );

//   var text = "This is stuff I want to put there";

//   var html = "<html><head></head><body>Hello, <b>" + text + "</b>.";
//   html += "How are you today?</body></html>";

//   //variable name of window must be included for all three of the following methods so that
//   //javascript knows not to write the string to this window, but instead to the new window

//   frog.document.open();
//   frog.document.write(html);
//   frog.document.close();
// };

// const onVideo = () => {
//   window.open(
//     "https://www.onlinevideoconverter.com/youtube-converter",
//     "stackedit"
//   );
//   window.open("https://otter.ai/", "otter");
// };

// const requestNotification = () => {
//   Notification.requestPermission(function(status) {
//     console.log("Notification permission status:", status);
//   });
// };

// const sendNotification = () => {
//   if (Notification.permission === "granted") {
//     navigator.serviceWorker.getRegistration().then(function(reg) {
//       var options = {
//         body: "Here is a notification body!",
//         //icon: 'images/example.png',
//         vibrate: [100, 50, 100],
//         data: {
//           dateOfArrival: Date.now(),
//           primaryKey: 1
//         }
//       };
//       reg.showNotification("Hello world!", options);
//     });
//   }
// };
function FullWidthGrid(props) {
  let [selection, setSelection] = useState({});
  let [postName, setPostName] = useState("");
  const setButtonColor = id => {
    const button = document.querySelector(id);
    console.log("postName", "'" + postName + "'");
    if (postName === "" || !selection.folder) {
      button.style.backgroundColor = "gray";
    } else {
      button.style.backgroundColor = "";
    }
  };
  const checkBloggable = () => {
    setButtonColor("#blogit");
  };
  setTimeout(checkBloggable, 0);
  // checkBloggable();
  const onPostNameChange = event => {
    setPostName((postName = event.target.value));
    checkBloggable();
  };
  // eslint-disable-next-line no-use-before-define
  const onSuggestionSelected = (
// eslint-disable-next-line no-use-before-define
    event,
    { suggestion /*, suggestionValue, suggestionIndex, sectionIndex, method */}
  ) => {

    setSelection((selection = suggestion));

    checkBloggable();
  };
  const onBlogging = () => {
    const DOC_ID = "1iYDEq-gjyXT5get3Cc1A-3kWQ67sYFL4fJ73X2hNlb4";

    const openString = `https://docs.google.com/document/d/${DOC_ID}/copy?id=${DOC_ID}&copyCollaborators=false&copyComments=false&title=${postName}&copyDestination=${
      selection.folder
    }`;
    const bloggerString = `https://www.blogger.com/blogger.g?blogID=${
      selection.id
    }#editor/src=sidebar`;

    window.open(bloggerString, "blogger");
    window.open("https://app.grammarly.com/ddocs/401948390", "grammarly");
    window.open("https://stackedit.io/app#", "stackedit");
    window.open(openString, "document");
    // setTimeout(sendNotification, 10000);
    // setTimeout(sendNotification, 20000);
  };
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SelectList
              suggestions={suggestions}
              onSuggestionSelected={onSuggestionSelected}
              searchLabel="Blog"
              searchPlaceholder="Enter the blog pattern"
            />

            <PostNameInput onChange={onPostNameChange} />
            <br />
            <AutoButton
              key="button1 "
              onClick={onBlogging}
              label="Blog It! buddy"
              id="blogit"
            />
            {/* <AutoButton
              onClick={requestNotification}
              label="Req Notification"
              id="requestit"
            />
            <AutoButton
              onClick={sendNotification}
              label="Send it"
              id="sendit"
            /> */}

            {/* <br />
            {selection.id}
            <br />
            {selection.folder}
            <br />
            {postName}
            <br /> */}
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <AutoButton onClick={onVideo} label="transcription">
              Blogging
            </AutoButton>
          </Paper>
        </Grid> */}
        {/* <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=30 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
//export default FullWidthGrid;
import React from 'react';
import { Paper } from "@material-ui/core";
import useStylesForMain from "./theme";

const Home = ( { open } ) => {
  // const classes = useStyles();
  const classes = useStylesForMain();

  return (
    <div className={classes.root}>
      <Paper className={`${classes.mainContent} ${open ? classes.mainContentShift : ""}`}>
        <h1>Home</h1>
        This is the HOME page.

        <br /> This is an issue tracker in progress. 
        <br />At the moment, it is only a React app (and it uses HashRouter instead of BrowserRouter to make the code simple, since this is just a work-in-progress demo), but will eventually use the entire MERN stack.
        <br /> The original project repository can be viewed here <a href="https://github.com/SilvaTN/issue-tracker" target="_blank">https://github.com/SilvaTN/issue-tracker</a>

        <br /> Right now, most things are placeholders.
        <br />
        <br />Eventually, the app will include these features:
            <br /> -You can demo it without logging in, but any input data will not be stored. 
            <br /> -You can create an account and sign in, which will allow you to use this web application to its fullest potential and will solve literally all problems you have in your life, as long as the problems you have are all related to needing an issue tracker.
            <br /> -It will rid the world of all its problems, assuming that they are all related to, again, needing an issue tracker, which they probably are.
      </Paper>
    </div>
  );
}


export default Home;
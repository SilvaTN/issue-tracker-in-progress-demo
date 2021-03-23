import './App.css';
import SignIn from './SignIn';
import Home from "./Home";
import { Switch, Route, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button, CssBaseline } from "@material-ui/core";
import DrawerAndAppBar from "./DrawerAndAppBar";
import CopiedDrawer from './CopiedDrawer';
import { useState } from 'react';
import YourProjects from './YourProjects';


function App() {
  const history = useHistory();
  let location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  function navigateTo(newPath) {
    console.log(location.pathname + " vs " + newPath);
    //prevents unnecessary push to history
    if (location.pathname !== newPath) {
      console.log("pushed " + newPath);
      history.push(newPath);
    }
  }

  return (
    <>
      <CssBaseline />
      
      {location.pathname !== "/login"
        ? <DrawerAndAppBar propPassedNavTo={navigateTo} open={drawerOpen} setOpen={setDrawerOpen} />
        : <span></span>  //not sure how else to make DrawerAndAppBar go away
      }

      <Switch>
        <Route path="/login">
          <SignIn propPassedNavTo={navigateTo} />
        </Route>
        <Route exact path="/">
          <Home open={drawerOpen} />
        </Route>
        <Route path="/projects">
          <YourProjects open={drawerOpen} />
        </Route>
      </Switch>
    </>
  );
}

export default App;

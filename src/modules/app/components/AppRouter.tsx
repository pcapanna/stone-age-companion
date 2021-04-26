import React from "react";
import {Spinner} from "../../ui";
import history from "../../../configuration/history";
import {Router, Switch} from "react-router-dom";
import {Redirect, Route} from 'react-router';
import {useIsBootstrapped} from "../hooks";
import {createStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {AboutScreen} from "../../about";
import {HomeScreen} from "../../home";
import StoneAgeScreen from "../../stone-age/screens/StoneAgeScreen";

const AppRouter = () => {

  const bootstrapped = useIsBootstrapped();

  if (!bootstrapped) {
    return (
      <Spinner/>
    );
  }
  // If you want to add login Authentication behaviour:
  // 1- Uncomment Login Route.
  // 2- Replace PublicRoute for PrivateRoute Component on authentication required routes
  return (
    <Router history={history}>
      <Switch>
        {/*<UnloggedRoute path="/login" exact component={LoginScreen}/>*/}
        <Route path="/home" exact component={StoneAgeScreen}/>
        <Redirect from="*" to="/home"/>
      </Switch>
    </Router>
  );
};

export default AppRouter;

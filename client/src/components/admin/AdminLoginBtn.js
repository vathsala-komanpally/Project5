import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import { OperationsOfAdmin } from "./OperationsOfAdmin";
import { SignIn } from '../user/SignIn';

const AdminLoginBtn = () => {
  const history = useHistory();
  const loggedIn = window.localStorage.getItem("userLoggedin") ? true : false;
  const [userLoggedIn, setUserLoggedIn] = useState(loggedIn);
  const [user, setUser] = useState({ username: "" });

  const logout = () => {
    console.log("loggedOut");
    setUser({ username: "" });
    setUserLoggedIn(false);
    window.localStorage.setItem("userLoggedin", "");
    history.replace("/");
  };

  return (
    <div>
      <div>
        {!userLoggedIn && (
          <Link to="/login">
            {" "}
            <Button variant="contained" color="secondary">
              Admin Login
                </Button>
          </Link>
        )}
        {userLoggedIn && (
          <Button onClick={logout} variant="contained" color="secondary">
            Log out
          </Button>
        )}
      </div>
      <Switch>
        <Route path="/login">
          <SignIn
            setUserLoggedIn={setUserLoggedIn}
            setUser={setUser}
            user={user}
          />
        </Route>
        <Route path="/"> {userLoggedIn && <OperationsOfAdmin />}</Route>
      </Switch>
    </div>
  )
}

export { AdminLoginBtn };

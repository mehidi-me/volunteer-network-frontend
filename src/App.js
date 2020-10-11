import React from "react";
import "./App.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route, Link
} from "react-router-dom";
import AddEvent from "./pages/AddEvent";
import Login from "./pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Register from "./pages/Register/Register";
import Event from "./pages/Event/Event";
import UserList from "./pages/UserList";

function App() {
  return (
    <Router>
      <Switch>

  
        <Route exact path="/">
          <Home></Home>
        </Route>


        <Route exact path="/admin/addevent">
          <AddEvent></AddEvent>
        </Route>


        <Route exact path="/admin/userlist">
          <UserList></UserList>
        </Route>


        <Route exact path="/login">
          <Login></Login>
        </Route>

        <PrivateRoute path="/register/:id">
          <Register></Register>
        </PrivateRoute>

        <PrivateRoute path="/event">
          <Event></Event>
        </PrivateRoute>


        <Route exact path="*">
          <h1>page not found!</h1>
          <Link to="/"> Go To Home Page</Link>
        </Route>

        
      </Switch>
    </Router>
  );
}

export default App;

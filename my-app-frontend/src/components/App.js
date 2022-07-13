import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReviewsPage from "./ReviewsPage";
import RestaurantPage from "./RestaurantPage";
import FriendsPage from "./FriendsPage";
import styled, { createGlobalStyle } from "styled-components";
import Toggle from "./Toggle";
import Menu from "./Menu";
import UserToggle from "./Users/UserToggle";
import Users from "./Users/Users";

function App() {
  const [navToggled, setNavToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };

  const handleUserToggle = () => {
    setUserToggled(!userToggled);
  };

  return (
    <>
      <GlobalStyle />
      <UserToggle handleUserToggle={handleUserToggle} />
      {userToggled ? <Users handleUserToggle={handleUserToggle} /> : null}
      <Toggle handleNavToggle={handleNavToggle} />
      <Router>
        {navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null}
        <Switch>
          <Route exact path="/" component={RestaurantPage} />
          <Route exact path="/reviews" component={ReviewsPage} />
          <Route exact path="/friends" component={FriendsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

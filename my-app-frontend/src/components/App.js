import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReviewsPage from "./ReviewsPage";
import RestaurantPage from "./RestaurantPage";
import FriendsPage from "./FriendsPage";
import styled, { createGlobalStyle } from "styled-components";
import Toggle from "./Toggle";
import Menu from "./Menu";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
`;

function App() {
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  };

  return (
    <>
      <GlobalStyle />
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

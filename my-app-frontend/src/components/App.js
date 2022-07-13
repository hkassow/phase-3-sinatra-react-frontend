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
  const [selectedUser, setSelectedUser] = useState('none')
  const [navToggled, setNavToggled] = useState(false);
  const [userToggled, setUserToggled] = useState(false);
  const [usernameList, setUsernameList] = useState([])
  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(r => r.json())
    .then(data => setUsernameList(data.map(user => user.name)))
  }, [])
  const helpSetUser = (username) => {
    console.log(username)
    fetch(`http://localhost:9292/users?name=${username}`)
    .then(r => r.json())
    .then(data => setSelectedUser(data))
  }
  console.log(selectedUser)
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
      {userToggled ? <Users handleUserToggle={handleUserToggle} helpSetUser={helpSetUser} usernameList ={usernameList}/> : null}
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

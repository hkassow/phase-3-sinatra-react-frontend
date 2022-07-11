import React, {useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import ReviewsPage from './ReviewsPage'
import RestaurantPage from './RestaurantPage'
import FriendsPage from './FriendsPage'

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route exact path="/" element = {<RestaurantPage/>}/>
      <Route exact path='reviews' element = {<ReviewsPage/>}/>
      <Route exact path='friends' element = {<FriendsPage />}/>
     </Routes>
    </>
  );
}

export default App;

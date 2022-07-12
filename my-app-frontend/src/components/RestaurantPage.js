import React, { useEffect, useState } from "react";
import styled from "styled-components";

function RestaurantPage() {
  // const [restaurantList, setRestaurantList] = useState([])

  // useEffect (() => {
  // fetch("http://localhost:9292/restaurants?include_review")
  // .then((r) => r.json())
  // .then((data) => setRestaurantList(data))
  // note the include review and filter by 3 endpoints to allow for params
  // fetch("http://localhost:9292/reviews?filter_by=3")
  // .then(r => r.json())
  // .then(d => console.log(d))
  // }, [])

  // console.log(restaurantList)
  // useEffect(() => {
  //     fetch("http://localhost:9292/restaurants?include_review")
  //     .then(r => r.json)
  //     .then(d => setRestaurantList(d))

  // },[])
  return (
    <StyledRestaurantPage>
      <Heading>Restaurant Page</Heading>
    </StyledRestaurantPage>
  );
}

const StyledRestaurantPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 5vw, 7vw);
  color: #eee;
  font-weight: 700;
  margin: 0;
  padding: 0;

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export default RestaurantPage;

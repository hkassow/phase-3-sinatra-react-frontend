import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";

function RestaurantPage() {
  const [restaurantList, setRestaurantList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:9292/restaurants?include_review")
      .then((r) => r.json())
      .then((data) => setRestaurantList(data));
  }, []);
  // console.log(restaurantList)
  // useEffect(() => {
  //     fetch("http://localhost:9292/restaurants?include_review")
  //     .then(r => r.json)
  //     .then(d => setRestaurantList(d))
  // },[])

  function handleReviewClick(e) {
    history.push("/reviews", e);
  }
  return (
    <StyledRestaurantPage>
      <CardContainer>
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onHandleReviewClick={handleReviewClick}
            />
          );
        })}
      </CardContainer>
    </StyledRestaurantPage>
  );
}

export default RestaurantPage;

const StyledRestaurantPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: scroll;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
`;

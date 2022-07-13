import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";

function RestaurantPage() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/restaurants?include_review")
      .then((r) => r.json())
      .then((data) => setRestaurantList(data));
  }, []);
  console.log(restaurantList)

  return (
    <StyledRestaurantPage>
      <Header>
        <h1>Hello</h1>
      </Header>
      <CardContainer>
        {restaurantList.map((restaurant) => {
          return <RestaurantCard restaurant={restaurant} />;
        })}
      </CardContainer>
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

const CardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
  background: #1f2229;
  overflow: scroll;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
`;

const Header = styled.div`
  margin-bottom: 500px;
`;

export default RestaurantPage;

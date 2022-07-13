import React from "react";
import styled from "styled-components";

function RestaurantCard({ restaurant }) {
  return (
    <CardWrapper>
      <CardImage background={restaurant.img} />
      <CardTextWrapper>
        <CardTextTitle>{restaurant.name}</CardTextTitle>
        <CardTextSubHead>{restaurant.category}</CardTextSubHead>
        <CardTextBody>{restaurant.description}</CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <LinkText href="#">Review</LinkText>
        </CardStats>
        <CardStats>
          <LinkText href="#">Likes</LinkText>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
}

export default RestaurantCard;

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #000;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
`;

const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 25px;
  overflow: hidden;
`;

const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 2rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  color: white;
  background-clip: text;
  -webkit-background-clip: text;
  color: white;
`;

const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
`;

const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: white;
`;

const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px;
`;

const CardTextSubHead = styled.span`
  color: white;
  font-size: 13px;
`;

const LinkText = styled.a`
  color: #fff
  text-decoration:none;
`;

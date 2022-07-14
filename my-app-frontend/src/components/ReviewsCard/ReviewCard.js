import React from "react";
import styled from "styled-components";

function ReviewCard({ restaurant }) {
  return (
    <div style={{ color: "#000" }}>
      <RestaurantName>{restaurant.name}</RestaurantName>
      <Title>Reviews</Title>
      {restaurant.reviews.map((review) => {
        return (
          <Reviews>
            -{review.comment} Rating: {review.score}
          </Reviews>
        );
      })}
    </div>
  );
}

export default ReviewCard;

const RestaurantName = styled.h2`
  color: #fff;
  font-weight: 900;
  font-size: 50px;
`;

const Title = styled.h3`
  color: #fff;
`;

const Reviews = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: 20px;
`;

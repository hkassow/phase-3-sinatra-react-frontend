import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

function ReviewCard({ restaurant }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  function userFilter(id) {
    if (users.length !== 0) {
      let x = users.filter((user) => {
        if (id === user.id) {
          return user.name;
        }
      });
      return x[0].name;
    }
  }

  function onHandleClick(review) {
    const reviewId = review.id;
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <div style={{ color: "#000" }}>
      <RestaurantName>{restaurant.name}</RestaurantName>
      <RestaurantDesc>{restaurant.description}</RestaurantDesc>
      <Title>Reviews</Title>
      {restaurant.reviews.map((review) => {
        return (
          <Reviews key={review.id}>
            -{review.comment} Rating: {review.score} -
            {userFilter(review.user_id)}{" "}
            <DeleteButton onClick={(e) => onHandleClick(review)}>
              X
            </DeleteButton>
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

const RestaurantDesc = styled.p`
  color: #fff;
  font-weight: 900;
  font-size: 25px;
`;

const DeleteButton = styled.button`
  background: transparent;
  color: red;
  font-size: 17px;
  border-radius: 18px;
  font-weight: 1000;
`;

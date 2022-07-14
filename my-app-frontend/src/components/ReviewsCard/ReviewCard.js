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

  function onHandleClick(review, e) {
    const reviewId = review.id;
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    e.target.parentNode.remove();
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
            <DeleteButton onClick={(e) => onHandleClick(review, e)}>
              X
            </DeleteButton>{" "}
            <EditButton>Edit</EditButton>
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
  position: sticky;
  top: 50%;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
  font-size: 20px;
`;

const EditButton = styled.button`
  position: sticky;
  top: 50%;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px;
  min-height: 30px;
  min-width: 120px;
  font-size: 20px;
`;

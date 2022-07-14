// import { useEffect } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ReviewCard from "./ReviewsCard/ReviewCard";

function ReviewsPage() {
  const location = useLocation();
  const restaurant = location.state;
  const [newObj, setNewObj] = useState({
    comment: "",
  });
  const [showForm, setShowForm] = useState(false);

  function handleChange(e) {
    setNewObj({ ...newObj, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newObj),
    });
  }

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <StyledReviewsPage>
      <ReviewCard restaurant={restaurant} />
      <CreateReview>
        <ReviewButton onClick={handleClick}>Leave a Review</ReviewButton>
        {showForm ? (
          <ReviewForm onSubmit={handleSubmit}>
            <ReviewText
              type="text"
              placeholder="Leave a Review"
              onChange={handleChange}
              name="comment"
            />
            <ReviewButton type="submit">Submit</ReviewButton>
          </ReviewForm>
        ) : null}
      </CreateReview>
    </StyledReviewsPage>
  );
}

export default ReviewsPage;

const StyledReviewsPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ReviewButton = styled.button`
  position: sticky;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  min-height: 30px;
  min-width: 100px;
  font-size: 20px;
`;

const ReviewText = styled.textarea`
  box-sizing: border-box;
  margin: 20px;
  background-color: #fafafa;
  width: 100%;
  border-radius: 18px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  resize: vertical;
  padding: 15px;
  height: 150px;
  display: flex;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 20px;
`;

const CreateReview = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

const ReviewForm = styled.form`
  display: flex;
  justify-content: center;
  justify-items: center;
`;

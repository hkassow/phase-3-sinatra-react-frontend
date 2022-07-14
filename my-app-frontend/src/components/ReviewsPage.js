// import { useEffect } from "react";
import { useEffect, useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { useLocation } from "react-router-dom";
import ReviewCard from "./ReviewsCard/ReviewCard";

function ReviewsPage({currentUser}) {
  const location = useLocation();
  let restaurant = location.state;
  const [showUpdateForm, setShowUpdateForm] = useState(false)
  const [currentUserReview, setCurrentUserReview] = useState(false)
  const [newObj, setNewObj] = useState({
    comment: "",
    score: null,
    restaurant_id: restaurant['id'],
    user_id: null
  });
  const [showForm, setShowForm] = useState(false);
  console.log(restaurant)
  useEffect(() => {
    if (currentUser != null){
      setNewObj({ ...newObj, ['user_id']: currentUser['id'] })
      fetch(`http://localhost:9292/restaurants/user/${currentUser['id']}?include_review`)
      .then(r => r.json())
      .then(d => d.forEach(element => {
        if (element['id'] === restaurant['id']) {
          console.log(element['reviews'])
          setCurrentUserReview(element['reviews'][0])
        }
      }))
    }
  },[currentUser])
  function handleChange(e) {
    if (e.target.name === 'score'){
      if (5 < e.target.value) {e.target.value=5}
      if(e.target.value < 0) {e.target.value =0}
    }
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
    })
    .then(r => r.json())
    .then(d => setCurrentUserReview(d))
  }


  function handleClick() {
    setShowForm(!showForm);
  }
  function handleClick2() {
    
    setShowUpdateForm(!showUpdateForm)
  }
  function updateFormChange(e) {
    if (e.target.name === 'score'){
      if (5 < e.target.value) {e.target.value=5}
      if(e.target.value < 0) {e.target.value =0}
    }
    setCurrentUserReview([{ ...currentUserReview, [e.target.name]: e.target.value }]);
  }
  function handleUpdateSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${currentUserReview.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUserReview),
    })
    .then(r => r.json())
    .then(d => setCurrentUserReview(d))
    handleClick2()
  }
  function handleDelete() {
    fetch(`http://localhost:9292/reviews/${currentUserReview.id}`,{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setCurrentUserReview(false)
    for (const p of document.querySelectorAll('p')) {
      if (p.textContent.includes(currentUser['name'])) {
        p.remove()
      }
    }
    
  }
  return (
    <StyledReviewsPage>
      {(restaurant != null)?<ReviewCard restaurant={restaurant} /> : null}
      {currentUserReview === false?<CreateReview>
          <ReviewButton onClick={handleClick}>Leave a Review</ReviewButton>
          {showForm ? (
            <ReviewForm onSubmit={handleSubmit}>
              <ReviewText
                type="text"
                placeholder="Leave a Review"
                onChange={handleChange}
                name="comment"
              />
              <ReviewText 
                type="text"
                placeholder="Rating"
                onChange={handleChange}
                name="score"
              />
              <ReviewButton type="submit">Submit</ReviewButton>
            </ReviewForm>
          ) : null}
        </CreateReview>
      :
      <HI>
        <ReviewButton onClick={handleClick2}>Update a review</ReviewButton>:
        {(showUpdateForm ) ? (
          <ReviewForm onSubmit={handleUpdateSubmit}>
            <ReviewText
              type="text"
              value= {currentUserReview.comment}
              onChange={updateFormChange}
              name="comment"
            />
            <ReviewText 
              type="text"
              value= {currentUserReview.score}
              onChange={updateFormChange}
              name="score"
            />
            <ButtonBox>
              <MiniReview type="submit">Submit</MiniReview>
              <MiniReview onClick={handleDelete}>Delete</MiniReview>
            </ButtonBox>
          </ReviewForm>
        ) : null}
      </HI>}
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
const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1r);
  position: sticky;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  min-height: 30px;
  min-width: 100px;
  font-size: 20px;
`

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
const MiniReview = styled.button`
  position: sticky;
  position: block;
  background-color: #0a0a23;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  min-height: 30px;
  min-width: 100px;
  font-size: 20px;
`

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
const HI = styled.div`
display: flex;
justify-content: center;
justify-items: center;
`
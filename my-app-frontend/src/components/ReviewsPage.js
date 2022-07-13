// import { useEffect } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import ReviewCard from "./ReviewsCard/ReviewCard";

function ReviewsPage() {
  const location = useLocation();
  const restaurant = location.state;
  //   useEffect(() => {
  //     fetch("http://localhost:9292/reviews?filter_by=3")
  //       .then((r) => r.json())
  //       .then((d) => console.log(d));
  //   }, []);
  return (
    <StyledReviewsPage>
      <ReviewCard restaurant={restaurant} />
    </StyledReviewsPage>
  );
}

const StyledReviewsPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ReviewsPage;

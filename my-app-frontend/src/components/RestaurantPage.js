import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";

function RestaurantPage() {
  const [restaurantList, setRestaurantList] = useState([]);
  const history = useHistory();
  const [input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const formRef = useRef();
  const inputFocus = useRef();

  const displayRestaurants = restaurantList.filter((restaurant) => {
    return restaurant.category.toLowerCase().includes(input.toLowerCase());
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    console.log(`form was submitted with input ${input}`);
  };

  useEffect(() => {
    fetch("http://localhost:9292/restaurants?include_review")
      .then((r) => r.json())
      .then((data) => setRestaurantList(data));
  }, []);

  function handleReviewClick(e) {
    history.push("/reviews", e);
  }
  return (
    <StyledRestaurantPage>
      <Heading>Yelp with Friends</Heading>
      <SearchDiv>
        <Form
          barOpened={barOpened}
          onClick={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          onFocus={() => {
            setBarOpened(true);
            inputFocus.current.focus();
          }}
          onBlur={() => {
            setBarOpened(false);
          }}
          onSubmit={onFormSubmit}
          ref={formRef}
        >
          <Button type="submit" barOpened={barOpened}>
            Search
          </Button>
          <Input
            onChange={(e) => setInput(e.target.value)}
            ref={inputFocus}
            value={input}
            barOpened={barOpened}
            placeholder="Search for a category"
          />
        </Form>
      </SearchDiv>
      <CardContainer>
        {displayRestaurants.map((restaurant) => {
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

const Heading = styled.h1`
  font-size: 45px;
  text-align: left;
  color: white;
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #37474f;
  width: ${(props) => (props.barOpened ? "30rem" : "2rem")};
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const SearchDiv = styled.div`
  font-family: "Poppins", sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

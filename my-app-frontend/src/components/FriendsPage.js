import React, { useState, useEffect } from "react";
import styled from "styled-components";

function FriendsPage({currentUser}) {
  const [following, setFollowing] = useState([])
  const [restaurantsReviews,setRestaurantsReviewed] =useState([])
  useEffect(() => {
    if (currentUser != null) {
      const x = [];
      currentUser['following'].forEach(follower => {
        x.push(<Option value={`${follower['id']}`}>{follower['name']}</Option>)
      })
    setFollowing(x)
  }},[currentUser])
  const setAll = () => {
  
  }
  const handleClick = (e) => {
    const id = e.target.value
    //grab all reviews by this follower
    console.log(id)
    // fetch(`/${user['id']}`)
    // .then(r => r.json())
    // .then(d => setRestaurantsReviewed(d))
    
  }

  return (
    <StyledFriendsPage>
        <Heading>Friends
          
        </Heading>
        <Left>
          <h1>Show all friend's reviews</h1>
          <Select onChange={(e) => handleClick(e)}>
            {following}
          </Select>

        </Left>
        <Center>Showing</Center>
    </StyledFriendsPage>
  );
}

const Option = styled.option`
  cursor: pointer;
  color: black;
  background: white;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`
const StyledFriendsPage = styled.div`
  min-height: 100vh;
  grid-template-columns: max-content;
  background-color: #282c34;
  display: grid;
  grid-gap: 10px;
  padding: 10px;

`;
const Center = styled.div`
  text-align center;
  grid-area: 2 / 2 / auto / span 2;
  grid-template-columns: repeat(2,1fr);
  background-color: rgba(255, 255, 255, 0.8);
`
const Left = styled.div`
  grid-area: 2 / 1 / auto / span 1;
  text-align center;
  max-width: 200px;
  background-color: rgba(255, 255, 255, 0.8);
`
const Heading = styled.div`
  grid-area: 1 / 1 /1 / span 3;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`
const Select = styled.select`
  width: 75%;
  color: gray;
  font-size: 14px;
  background-color: rgba(255, 255, 255, 0.8);
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export default FriendsPage;

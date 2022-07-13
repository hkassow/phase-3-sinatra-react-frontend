import React, { useState, useEffect } from "react";
import styled from "styled-components";

function FriendsPage({currentUser}) {
  const [following, setFollowing] = useState([])
  useEffect(() => {
    if (currentUser != null) {
      const x = [];
      currentUser['following'].forEach(follower => {
        x.push(<li>{follower['name']}</li>)
      })
    setFollowing(x)
  }},[currentUser])
  console.log(following)
  return (
    <StyledFriendsPage>
        <Heading>Friends</Heading>
        <Left>
          <h1>Show friend reviews</h1>
          <ul> 
            <h1>Show:</h1>
            {following}
          </ul>
        </Left>
        <Center>Center</Center>
    </StyledFriendsPage>
  );
}

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
  grid-area: 2 / 2 / auto / span 2
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

export default FriendsPage;

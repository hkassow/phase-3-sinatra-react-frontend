import React from "react";
import styled from "styled-components";

function FriendsPage() {
  return (
    <StyledFriendsPage>
        <Heading>Friends</Heading>
        <Left>
          <h1>Show friend reviews</h1>
          <ul> 
            <h1>Show:</h1>
            <li>friend1</li>
            <li>friend2</li>
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
`
const Heading = styled.div`
  grid-area: 1 / 1 /1 / span 3;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
`

export default FriendsPage;

import React from "react";
import styled from "styled-components";

function FriendsPage() {
  return (
    <StyledFriendsPage>
      <Heading>Friends</Heading>
    </StyledFriendsPage>
  );
}

const StyledFriendsPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: clamp(3rem, 5vw, 7vw);
  color: #eee;
  font-weight: 700;
  margin: 0;
  padding: 0;

  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export default FriendsPage;

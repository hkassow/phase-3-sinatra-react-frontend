import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

function Users({ handleUserToggle, usernameList, helpSetUser }) {
  let listNames = []
  if (typeof usernameList != 'undefined') {
    listNames = usernameList.map(username => (
      <li style={{cursor: 'pointer'}} onClick={() => helpSetUser(username)}>{username}</li>
    ))
  }
  return (
    <StyledMenu>
      <Userlist>
        {listNames}
      </Userlist>

      <CloseToggle onClick={handleUserToggle} />
    </StyledMenu>
  );
}

export default Users;
const Userlist = styled.div`
overflow-y:scroll;
overflow: hidden;

`

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  @media screen and (min-width: 790px) {
    width: 60%;
  }
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CloseToggle = styled(FaTimes)`
  position: fixed;
  top: 5%;
  left: 4%;
  background: #222;
  color: #fff;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

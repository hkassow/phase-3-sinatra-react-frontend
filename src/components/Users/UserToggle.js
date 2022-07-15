import React from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

function UserToggle({ handleUserToggle }) {
  return <StyledToggle onClick={handleUserToggle} />;
}

export default UserToggle;

const StyledToggle = styled(FaUser)`
  position: fixed;
  top: 5%;
  left: 4%;
  color: #222;
  background: #eee;
  padding: 0.75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

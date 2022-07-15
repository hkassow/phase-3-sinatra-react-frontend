import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RestaurantCard from "./RestaurantCard";
import { useHistory } from "react-router-dom";
import AddFriend from "./AddFriend";

function FriendsPage({currentUser, usernameList, setCurrentUser}) {
  const [following, setFollowing] = useState([])
  const [restaurantsReviews,setRestaurantsReviews] =useState([])
  const history = useHistory();
  function handleReviewClick(e) {
    history.push("/reviews", e);
  }
  useEffect(() => {
    if (currentUser != null) {
      const x = [];
      currentUser['following'].forEach(follower => {
        x.push(<Option key={follower['name']} value={`${follower['id']}`}>{follower['name']}</Option>)
      })
    setFollowing(x)
    let e = {target: {value: 0}}
    handleClick(e)
  }},[currentUser])
  const handleClick = (e) => {
    let id = e.target.value
    let params = 'include_review'
    if (id == 0) {
      id = currentUser['id']
      params += '&friend_reviewed'
    }
    fetch(`https://intelligent-gerard-03838.herokuapp.com/restaurants/user/${id}?${params}`)
    .then(r => r.json())
    .then(d => setRestaurantsReviews(d.map((restaurant) => (
        <RestaurantCard
          key ={restaurant['name']}
          restaurant={restaurant}
          onHandleReviewClick={handleReviewClick}
          addReview ={(id===currentUser['id'])?false:true}
        />
      )
    )))

  }

  return (
    <StyledFriendsPage>
        <Heading>Friends Page
          <h1>Current user: {currentUser != null?currentUser['name']:'none selected'}</h1>
          
        </Heading>
        <Left>
          <h1>
          </h1>
          <label >Select a specific friend:</label>
          <Select onChange={handleClick}>
            <option value='0'>Show all</option>
            {following}
          </Select>
          <AddFriend currentUser={currentUser} usernameList={usernameList} setCurrentUser = {setCurrentUser}/>

        </Left>
        {restaurantsReviews}
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
  grid-template-columns: repeat(3, 1fr);
  background-color: #282c34;
  display: grid;
  grid-gap: 10px;
  padding: 10px;

`;
const Center = styled.div`
  text-align center;
  grid-template-columns: repeat(2,1fr);
  background-color: rgba(255, 255, 255, 0.8);
`
const Left = styled.div`
  text-align center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 18px;
  height: 500px;
`
const Heading = styled.div`
  border-radius: 18px;
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

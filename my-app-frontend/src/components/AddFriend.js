import { useState } from "react";
import styled from "styled-components";
function AddFriend({currentUser, usernameList, setCurrentUser}) {
    const [showListToggle, setShowList] = useState(false)
    const handleClick = () => {
        setShowList(!showListToggle)
    }
    const optionsClick = async (e) => {
       
        let followee;
        await fetch(`https://intelligent-gerard-03838.herokuapp.com/users?name=${e.target.textContent}`)
                .then(r => r.json())
                .then(data => followee = data)
        fetch(`http://localhost:9292/friends`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
             },
            body: JSON.stringify({
                follower_id: currentUser['id'],
                followee_id: followee['id']
            })
        })
        .then( r => r.json())
        .then(data => console.log(data))
        let followingList = [...currentUser['following'], followee]
        console.log(followingList)
        setCurrentUser({...currentUser, ['following']: followingList})
        e.target.remove()

    }
    let listNames = []
    if (typeof usernameList != 'undefined') {
        let following = []
        if (currentUser != null) {
            following = currentUser['following'].map(user => user['name'])
        }
        usernameList.forEach(username => {
            if (!(following.includes(username))){
                listNames.push(<Options onClick={optionsClick}>{username}</Options>)
            }
        })
    }
    
    
    function filterFunction() {
        var input, filter, op, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        let div = document.getElementById("myDropdown");
        op = div.getElementsByTagName("option");
        for (i = 0; i < op.length; i++) {
          let txtValue = op[i].textContent || op[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            op[i].style.display = "";
          } else {
            op[i].style.display = "none";
          }
        }
    }

    return (
    <Dropdown class="dropdown">
        <Dropbtn onClick={handleClick} >Add a friend</Dropbtn>
        <OptionsContainer visibility={showListToggle} id="myDropdown" class="dropdown-content">
            <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction}/>
            {listNames}
        </OptionsContainer>
    </Dropdown>
    )
}
const Dropbtn = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #3e8e41;
    }
    &:focus {
        background-color: #3e8e41;
    }
`
const SearchInput = styled.input`
    box-sizing: border-box;
    background-image: url('searchicon.png');
    background-position: 14px 12px;
    background-repeat: no-repeat;
    font-size: 16px;
    padding: 14px 20px 12px 45px;
    border: none;
    border-bottom: 1px solid #ddd;
    &:focus {
        outline: 3px solid #ddd;
    }

`
const Dropdown = styled.div`
    position: relative;
    display: block;
    padding: 10px;
`
  
const Options = styled.option`
  cursor: pointer;
  color: black;
  display: block;
  white-space: pre;
  padding: 12px 16px;
  text-decoration: none;
  &:hover {
    background-color: #ddd;
  }

`
const OptionsContainer = styled.div`
    display: ${props => props.visibility? 'block': 'none'};
    background-color: #f6f6f6;
    height: 300px;
    overflow: auto;
    border: 1px solid #ddd;
    z-index: 1;

`

export default AddFriend
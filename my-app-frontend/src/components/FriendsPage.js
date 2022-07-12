import React, { useEffect } from "react"
function FriendsPage () {
    useEffect(() => {
        fetch("http://localhost:9292/user/:id?friends")
        .then(r => r.json())
        .then(d => console.log(d))
    })
    return <></>
}
export default FriendsPage
import React, { useEffect, useState } from "react"

function RestaurantPage ()  {
    const [restaurantList, setRestaurantList] = useState([])

    useEffect (() => {
        fetch("http://localhost:9292/restaurants?include_review")
        .then((r) => r.json())
        .then((data) => setRestaurantList(data))
        // note the include review and filter by 3 endpoints to allow for params
        // fetch("http://localhost:9292/reviews?filter_by=3")
        // .then(r => r.json())
        // .then(d => console.log(d))
      }, [])

      console.log(restaurantList)
    // useEffect(() => {
    //     fetch("http://localhost:9292/restaurants?include_review")
    //     .then(r => r.json)
    //     .then(d => setRestaurantList(d))
        
    // },[])
    return (<h1> hi</h1>)
}


export default RestaurantPage
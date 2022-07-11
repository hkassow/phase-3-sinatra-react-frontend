import { useEffect } from "react"

function ReviewsPage ()  {
    useEffect(() => {
        fetch("http://localhost:9292/reviews?filter_by=3")
        .then(r => r.json())
        .then(d => console.log(d))
    },[])
    return <h1> hi</h1>
}


export default ReviewsPage
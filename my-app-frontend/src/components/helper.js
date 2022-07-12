
let x = "2022-07-11T20:52:32.888Z"
prettyTime = () => {
 let result = x.split(/-|T/)
 let ymd = result.slice(0,3)
 return ymd
}

//review date makes pretty then returns diff from today and that date
daysSince = (review_date) => {
    //new Date takes in YEAR MONTH from DAY 
    let date = prettyTime(review_date)
    const oneDay = 24 * 60 * 60 * 1000;
    date = new Date(date[0], date[1] - 1, date[2])
    let today = new Date(new Date().toLocaleString())
    const diffDays = Math.round(Math.abs((today - date) / oneDay));
    return diffDays
}


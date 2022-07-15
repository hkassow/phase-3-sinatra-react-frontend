let x = "2022-07-11T20:52:32.888Z";
prettyTime = () => {
  let result = x.split(/-|T/);
  let ymd = result.slice(0, 3);
  return ymd;
};

//review date makes pretty then returns diff from today and that date
daysSince = (review_date) => {
    //new Date takes in YEAR MONTH from DAY 
    let today = new Date(new Date().toLocaleString())
    let date = prettyTime(review_date)
    date = new Date(date[0], date[1] - 1, date[2])
    const oneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.round(Math.abs((today - date) / oneDay));
    return diffDays

}

const helpUpdate = (restaurant) => {
    fetch(`http://localhost:9292/reviews/${restaurant.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({restaurant})
    })
    .then(r => r.json())
    .then(d => console.log(d))
  }
  const helpDeleteReview = (restaurant) => {
    fetch`http://localhost:9292/reviews/${restaurant.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
    }
  }

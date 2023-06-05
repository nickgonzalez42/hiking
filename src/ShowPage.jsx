/* eslint-disable react/prop-types */
export function ShowPage(props) {
  const sampleHike = {
    id: 1,
    name: "The 606",
    length: "2.7 miles",
    description:
      "The Bloomingdale Trail is a 2.7-mile elevated rail trail linear park running east–west on the northwest side of Chicago. It is the longest greenway project of a former elevated rail line in the Western Hemisphere, and the second longest in the world, after the Promenade plantee linear park in Paris.",
    city: "Chicago",
    region: "Midwest",
    country: "The United States",
    lat: "41.9137",
    lon: "87.7202",
    difficulty: "Easy",
    rating: 4.8,
    thumbnail: "https://lh3.googleusercontent.com/p/AF1QipN3cETyA1wcuYQS52BMYIeYN4z4XAFCq8BaQyQg=s1360-w1360-h1020",
    hike_ratings: [
      {
        id: 1,
        user_id: 1,
        rating: 5,
        comment: "Best. Hike. Ever.",
      },
      {
        id: 2,
        user_id: 2,
        rating: 4.6,
        comment: "Got demolished by Lime Scooter user. Could be better.",
      },
    ],
  };

  return (
    <>
      <h1>{props.currentHike.name}</h1>
      <img href={props.currentHike.thumbnail} />
      <p>Length: {props.currentHike.length}</p>
      <p>Description: {props.currentHike.description}</p>
      <p>City: {props.currentHike.city}</p>
      <p>Region: {props.currentHike.region}</p>
      <p>Country: {props.currentHike.country}</p>
      <p>Difficulty: {props.currentHike.difficulty}</p>
      <p>Average Rating: {props.currentHike.rating}</p>
      {props.currentHike.hike_ratings?.map((rating) => (
        <div key={rating.id}>
          <p>{rating.user_id}</p>
          <p>{rating.rating}</p>
          <p>{rating.comment}</p>
        </div>
      ))}
    </>
  );
}

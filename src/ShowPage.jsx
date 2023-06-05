/* eslint-disable react/prop-types */
export function ShowPage(props) {
  return (
    <>
      <h1>{props.currentHike.name}</h1>
      <img src={props.currentHike.thumbnail} />
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

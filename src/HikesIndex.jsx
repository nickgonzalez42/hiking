export function HikesIndex(props) {
  return (
    <div>
      <h1>All hikes</h1>
      {props.hikes.map((hike) => (
        <div key={hike.id}>
         <h2>{hike.name}</h2>
         <h2>{hike.length}</h2>
         <p>{hike.description}</p>
         </div>
      ))}
      </div>
  );
}
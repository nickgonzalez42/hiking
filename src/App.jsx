import "./App.css";
import { ShowPage } from "./ShowPage";

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

function App() {
  return <ShowPage currentHike={sampleHike} />;
}

export default App;

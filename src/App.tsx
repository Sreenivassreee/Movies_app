import React, { useState } from "react";
export default function App() {
  interface movie {
    name: string;
    director: string;
  }

  const [movies, setMovies] = useState<movie[]>([]);

  function addMovieDetails(val: any) {
    val.preventDefault();
    setMovies([
      ...movies,
      { name: val.target[0].value, director: val.target[1].value },
    ]);
    val.target.reset();
  }
  function removeMovie(index: number) {
    const newArray = [...movies];
    newArray.splice(index, 1);
    setMovies(newArray);
  }

  return (
    <div className="App">
      <form onSubmit={addMovieDetails}>
        <input name="movie" />
        <input name="Director name" />
        <button type="submit">Save</button>
      </form>

      {movies.map((x: movie, index) => (
        <div key={index}>
          <h3>{`${x.name} -- ${x.director}`}</h3>
          <button onClick={() => removeMovie(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

import React, { useState } from "react";
import Movies from "../movies.json";
import "./MoviesList.css";

export default function MoviesListFilter() {
  const [selected, changeValue] = useState("Default");
  function valueChange(b) {
    changeValue(b.target.value);
    console.log(selected);
  }
  const categories = Movies.map((movie) => movie.Location);
  const uniqueCategories = [...new Set(categories)];
  return (
    <div className="filter">
      <span>Filter By:</span>{" "}
      <select onChange={(b) => valueChange(b)}>
        <option value="default">---Select a category----</option>
        {uniqueCategories.map((Location) => (
          <option value={Location}>{Location}</option>
        ))}
      </select>
      <table className="table table-hover catalougelist">
        <thead>
          <tr>
            <th style={{ textAlign: "Center" }}>Title</th>
            <th style={{ textAlign: "Center" }}>Poster</th>
            <th style={{ textAlign: "Center" }}>IMDB Rating</th>
            <th style={{ textAlign: "Center" }}>Stills</th>
            <th style={{ textAlign: "Center" }}>Location Where to Watch</th>
            <th style={{ textAlign: "Center" }}>Storyline</th>
          </tr>
        </thead>
        <tbody>
          {Movies.filter((movie) => movie.Location === selected).map(
            (Movie) => {
              return (
                <tr key={Movie.Language}>
                  <td style={{ textAlign: "left" }}>{Movie.Title}</td>
                  <td style={{ textAlign: "left" }}>
                    <img
                      src={Movie.Poster}
                      alt="Movie Poster"
                      width="250"
                      height="250"
                    />
                  </td>
                  <td style={{ textAlign: "left" }}>{Movie.imdbRating}</td>
                  <td style={{ textAlign: "left" }}>
                    <ul>
                      {Movie.Stills.map((Stills, index) => (
                        <li key={index}>
                          <img
                            src={Movie.Stills[index++]}
                            alt="Movie Poster"
                            width="200"
                            height="100"
                          />
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ textAlign: "left" }}>{Movie.Location}</td>
                  <td style={{ textAlign: "left" }}>{Movie.Plot}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

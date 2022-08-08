import React from "react";
import Data from "./Component/Data";
import "./index.css";
import moment from "moment";
const Filter = () => {
  let topRatedMovie = Data.filter((movies) => movies["IMDB Rating"] >= 7);
  topRatedMovie.length = 200;
  console.log(topRatedMovie);
  return (
    <>
      <h1 className="text-center task-heading pt-3">Filter Movie Task</h1>
      {/* filter section */}
      <form className="filter-form d-flex justify-content-around  align-items-center  flex-row ">
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label htmlFor="startDate" class="form-label">
            Start Date
          </label>
          <input type="date" class="form-control" />
        </div>
        <div class="mb-3">
          <label htmlFor="endDate" class="form-label">
            End Date
          </label>
          <input type="date" class="form-control" />
        </div>
        <div class="mb-3">
          <label htmlFor="endDate" class="form-label">
            Select rating
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>select rating</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" class="form-label">
            Select genre
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>select genre</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <button className="btn btn-primary mt-2">filter</button>
      </form>

      {/* table section */}
      <section className="p-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tile</th>
              <th scope="col">Release date</th>
              <th scope="col">Running time</th>
              <th scope="col">Genre</th>
              <th scope="col">IMDB Rating</th>
              <th scope="col">WorldWide Gross </th>
            </tr>
          </thead>
          <tbody>
            {topRatedMovie.map((movies, index) => {
              const relesedate = movies["Release Date"];
              const runningtime = movies["Running Time min"];
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{movies.Title}</td>
                  <td>{moment(relesedate).format("DD,MMM,YYYY")}</td>
                  {runningtime === null ? (
                    <td>not provided</td>
                  ) : (
                    <td>{moment(runningtime).format(`h:mm`)}</td>
                  )}

                  {movies["Major Genre"] === null ? (
                    <td>not provided</td>
                  ) : (
                    <td>{movies["Major Genre"]}</td>
                  )}
                  {movies["IMDB Rating"] === null ? (
                    <td>not provided</td>
                  ) : (
                    <td>{movies["IMDB Rating"]}</td>
                  )}

                  <td>${movies["Worldwide Gross"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Filter;

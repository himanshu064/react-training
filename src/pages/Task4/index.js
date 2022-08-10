import React from "react";
import Data from "./Data";
import "./App.css";
import moment from "moment";
const index = () => {
  let topRatedMovie = Data.filter((data) => data["IMDB Rating"] >= 7).sort(function(a,b){return b["IMDB Rating"] - a["IMDB Rating"]});
  topRatedMovie.length = 200;
  return (
    <>
      {/* Code For Selecting Function */}
      <h1 className="heading">Filtering Movies Names</h1>
      <form className="filter-form d-flex justify-content-around  align-items-center  flex-row ">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">
            Start Date
          </label>
          <input type="date" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="EndDate" className="form-label">
            End Date
          </label>
          <input type="date" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="EndDate" className="form-label">
            Select Rating
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">
            Select Genre
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Select Genre</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <button className="btn">Filter</button>
      </form>
      {/* Code For Creating Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Running Time</th>
            <th>Genre</th>
            <th>IMDB Rating</th>
            <th>WorldWide Gross</th>
          </tr>
        </thead>
        <tbody>
          {topRatedMovie.map((data, index) => {
            const relesedate = data["Release Date"];
            const runningtime = data["Running Time min"];
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.Title}</td>
                <td>{moment(relesedate).format("DD/MM/YYYY")}</td>
                {runningtime === null ? (
                  <td>NA</td>
                ) : (
                  <td>{moment(runningtime).format(`hh:mm:ss`)}</td>
                )}
                {data["Major Genre"] === null ? (
                  <td>NA</td>
                ) : (
                  <td>{data["Major Genre"]}</td>
                )}
                {data["IMDB Rating"] === null ? (
                  <td>NA</td>
                ) : (
                  <td>{data["IMDB Rating"]}</td>
                )}
                <td>${data["Worldwide Gross"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default index;
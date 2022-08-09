import React, { useEffect, useState } from "react";
import Data from "./Component/Data";
import "./index.css";
import moment from "moment";
const Filter = () => {
  const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [formdata, setfromData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    rating: "",
    genre: "",
  });
  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setfromData({ ...formdata, [name]: value });
  };
  let topRatedMovie = Data.filter((movies) => movies["IMDB Rating"] >= 7).sort(
    (a, b) => a["IMDB Rating"] - b["IMDB Rating"]
  );
  const [intitalData, setInitalData] = useState(topRatedMovie);
  intitalData.length = 200;
  // unique genre
  const dupGenre = Data.map((item) => {
    return item["Major Genre"];
  });
  const uniquDup = [...new Set(dupGenre)];
  uniquDup.shift();

  const HandleFilter = (event) => {
    event.preventDefault();
    let updateData = [...Data];
    Object.keys(formdata).map((item) => {
      if (item === "title" && formdata[[item]] !== "") {
        updateData = sortByTitle(updateData, formdata[[item]]);
      }
      if (item === "rating" && formdata[[item]] !== "") {
        updateData = sortByFilter(updateData, formdata[[item]]);
      }
      if (item === "genre" && formdata[[item]] !== "") {
        updateData = sortByGenre(updateData, formdata[[item]]);
      }
      if (
        item === "startDate" &&
        formdata[[item]] !== "" &&
        formdata.endDate !== ""
      ) {
        updateData = sortByDate(
          updateData,
          formdata.startDate,
          formdata.endDate
        );
      }
      if (
        item === "endDate" &&
        formdata[[item]] !== "" &&
        formdata.startDate !== ""
      ) {
        updateData = sortByDate(
          updateData,
          formdata.startDate,
          formdata.endDate
        );
      }
    });
    setInitalData(updateData);
  };
  const sortByFilter = (Data, key) => {
    const rating = Data.filter(
      (item) => Math.round(item["IMDB Rating"]) == key
    ).sort((a, b) => a["IMDB Rating"] - b["IMDB Rating"]);
    return rating;
  };
  const sortByGenre = (Data, key) => {
    const filterByGenre = Data.filter((item) => item["Major Genre"] === key);
    return filterByGenre;
  };
  const sortByDate = (Data, startDate, endDate) => {
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const filterByDate = Data.filter((item) => {
      return (
        new Date(item["Release Date"]) >= new Date(sDate) &&
        new Date(item["Release Date"]) <= new Date(eDate)
      );
    });
    return filterByDate;
  };
  const sortByTitle = (Data, key) => {
    const title = Data.filter((item) => {
      return String(item["Title"]).toLowerCase().includes(key.toLowerCase());
    });
    return title;
  };

  return (
    <>
      <h1 className="text-center task-heading pt-3">Filter Movie Task</h1>
      {/* filter section */}
      <form
        className="filter-form d-flex justify-content-around  align-items-center  flex-row"
        onSubmit={HandleFilter}
      >
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            name="title"
            value={formdata.title}
            onChange={HandleChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="startDate" class="form-label">
            Start Date
          </label>
          <input
            type="date"
            class="form-control"
            name="startDate"
            value={formdata.startDate}
            onChange={HandleChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="endDate" class="form-label">
            End Date
          </label>
          <input
            type="date"
            class="form-control"
            name="endDate"
            value={formdata.endDate}
            onChange={HandleChange}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="endDate" class="form-label">
            Select rating
          </label>
          <select
            class="form-select"
            name="rating"
            value={formdata.rating}
            onChange={HandleChange}
          >
            <option selected>select rating</option>
            {rating.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" class="form-label">
            Select genre
          </label>
          <select
            class="form-select"
            name="genre"
            value={formdata.genre}
            onChange={HandleChange}
          >
            <option selected>select genre</option>
            {uniquDup.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn btn-primary mt-2" type="submit">
          filter
        </button>
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
            {intitalData.map((movies, index) => {
              const relesedate = movies["Release Date"];
              const runningtime = movies["Running Time min"];
              const gross = new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "INR",
              }).format(movies["Worldwide Gross"]);
              const hrs = runningtime / 60;
              var rhours = Math.floor(hrs);
              const minutes = (hrs - rhours) * 60;
              var rminutes = Math.round(minutes);
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{movies.Title}</td>
                  <td>{moment(relesedate).format("DD,MMM,YYYY")}</td>
                  {runningtime === null ? (
                    <td>not provided</td>
                  ) : (
                    <td>
                      {rhours}H:{rminutes}M
                    </td>
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

                  <td>{gross}</td>
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

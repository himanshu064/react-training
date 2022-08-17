import React, { useState } from "react";
import Data from "./Component/Data";
import "./index.css";
import moment from "moment";
const Filter = () => {
  const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [sorted, setSorted] = useState(false);
  const [sortedRating, setSortedRating] = useState(false);
  const [formdata, setfromData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    rating: "",
    genre: "",
  });
  const HandleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    if (name === "rating" && value === "select rating") {
      value = "";
    }
    if (name === "genre" && value === "select genre") {
      value = "";
    }
    if (name === "title" && value === "title") {
      value = "";
    }
    if (name === "startDate" && value === "startDate") {
      value = "";
    }
    if (name === "endDate" && value === "endDate") {
      value = "";
    }
    setfromData({ ...formdata, [name]: value });
  };

  let topRatedMovie = Data.filter((movies) => movies["IMDB Rating"] >= 8)
    .sort((a, b) => b["IMDB Rating"] - a["IMDB Rating"])
    .splice(0, 200);
  const [intitalData, setInitalData] = useState(topRatedMovie);
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
        console.log(formdata[[item]]);
        updateData = sortByTitle(updateData, formdata[[item]]);
      }
      if (item === "rating" && formdata[[item]] !== "") {
        updateData = sortByFilter(updateData, formdata[[item]]);
      }
      if (item === "genre" && formdata[[item]] !== "") {
        console.log(formdata[[item]]);
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
      if (item === "startDate" && formdata[[item]] !== "") {
        updateData = sortBystartDate(updateData, formdata.startDate);
      }
      if (item === "endDate" && formdata[[item]] !== "") {
        updateData = sortByendDate(updateData, formdata.endDate);
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
  const sortBystartDate = (Data, key) => {
    const sDate = new Date(key);
    const startDate = Data.filter((item) => {
      return new Date(item["Release Date"]) >= new Date(sDate);
    });
    return startDate;
  };
  const sortByendDate = (Data, key) => {
    const eDate = new Date(key);
    const endDate = Data.filter((item) => {
      return new Date(item["Release Date"]) <= new Date(eDate);
    });
    return endDate;
  };
  // filter title by ascending order
  const LowToHigh = () => {
    let newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) => (a.Title > b.Title ? 1 : -1));
    setInitalData(sortedData);
  };
  // filter title by descending order
  const HighToLow = () => {
    let newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) => (b.Title > a.Title ? 1 : -1));
    setInitalData(sortedData);
  };
  // filter worldwide gross by ascending order
  const grosstoLow = () => {
    let newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      a["Worldwide Gross"] > b["Worldwide Gross"] ? 1 : -1
    );
    setInitalData(sortedData);
  };
  // filter worldwide gross by descending order
  const grosstoHigh = () => {
    let newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      b["Worldwide Gross"] > a["Worldwide Gross"] ? 1 : -1
    );
    setInitalData(sortedData);
  };
  // filter rating  by ascending order
  const ratingtoLow = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      Math.round(a["IMDB Rating"]) > Math.round(b["IMDB Rating"]) ? 1 : -1
    );
    setInitalData(sortedData);
  };

  // filter rating by descending order
  const ratingtoHigh = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      b["IMDB Rating"] > a["IMDB Rating"] ? 1 : -1
    );
    setInitalData(sortedData);
  };
  // filter running time by ascendong order
  const runningTimeToLow = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      a["Running Time min"] > b["Running Time min"] ? 1 : -1
    );
    setInitalData(sortedData);
  };
  // filter running time by descending order
  const runningTimeToHigh = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      b["Running Time min"] > a["Running Time min"] ? 1 : -1
    );
    setInitalData(sortedData);
  };
  // filter start date by ascending order
  const DateToLow = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      new Date(a["Release Date"]) > new Date(b["Release Date"]) ? 1 : -1
    );
    setInitalData(sortedData);
  };
  // filter start date by descending order
  const DateToHigh = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) =>
      new Date(b["Release Date"]) > new Date(a["Release Date"]) ? 1 : -1
    );
    setInitalData(sortedData);
  };
  const ChangeOrderTime = () => {
    setSorted(!sorted);
    sorted === true ? runningTimeToHigh() : runningTimeToLow();
  };
  const ChangeOrderRating = () => {
    setSortedRating(!sortedRating);
    sortedRating === true ? ratingtoHigh() : ratingtoLow();
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
            defaultValue="title"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="startDate" class="form-label">
            Start Date
            <span>
              <i
                className="fa-solid fa-arrow-down ms-2"
                onClick={DateToLow}
              ></i>
            </span>
          </label>
          <input
            type="date"
            class="form-control"
            name="startDate"
            value={formdata.startDate}
            onChange={HandleChange}
            defaultValue="startDate"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="endDate" class="form-label">
            End Date
            <span>
              <i className="fa-solid fa-arrow-up ms-2" onClick={DateToHigh}></i>
            </span>
          </label>
          <input
            type="date"
            class="form-control"
            name="endDate"
            value={formdata.endDate}
            onChange={HandleChange}
            defaultValue="endDate"
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
              <th scope="col">
                Tile
                <span>
                  <i
                    className="fa-solid fa-arrow-down ms-2"
                    onClick={LowToHigh}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-solid fa-arrow-up ms-2"
                    onClick={HighToLow}
                  ></i>
                </span>
              </th>
              <th scope="col">Release date</th>
              <th scope="col">
                Running time
                <span>
                  {sorted === true ? (
                    <i
                      className="fa-solid fa-arrow-down-a-z ms-2"
                      onClick={ChangeOrderTime}
                    ></i>
                  ) : (
                    <i
                      class="fa-solid fa-arrow-up-z-a"
                      onClick={ChangeOrderTime}
                    ></i>
                  )}
                </span>
              </th>
              <th scope="col">Genre</th>
              <th scope="col">
                IMDB Rating
                <span>
                  {sortedRating === true ? (
                    <i
                      className="fa-solid fa-arrow-down-a-z ms-2"
                      onClick={ChangeOrderRating}
                    ></i>
                  ) : (
                    <i
                      class="fa-solid fa-arrow-up-z-a"
                      onClick={ChangeOrderRating}
                    ></i>
                  )}
                </span>
              </th>
              <th scope="col">
                WorldWide Gross
                <span>
                  <i
                    className="fa-solid fa-arrow-down ms-2"
                    onClick={grosstoLow}
                  ></i>
                </span>
                <span>
                  <i
                    className="fa-solid fa-arrow-up ms-2"
                    onClick={grosstoHigh}
                  ></i>
                </span>
              </th>
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

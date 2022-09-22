import React, { useState } from "react";
import Data from "./Data";
import "./style.css";
import moment from "moment";
const Movie = () => {
  const rating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [formdata, setformData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    rating: "",
    genre: "",
  });
  const HandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setformData({ ...formdata, [name]: value });
  };
   let topRatedMovie = Data.filter((data) => data["IMDB Rating"] >= 8).sort(
    (a, b) => b["IMDB Rating"] - a["IMDB Rating"]
  ).slice(0,200);

  const [intitalData, setInitalData] = useState(topRatedMovie);
  // unique genre
  const dupGenre = Data.map((item) => {
    return item["Major Genre"];
  });
  const uniquDup = [...new Set(dupGenre)];
  uniquDup.shift();
  let updateData;
  const HandleFilter = (event) => {
    event.preventDefault();
    updateData = [...Data];


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
      (item) => Math.round(item["IMDB Rating"]) ===key
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
  const LowToHigh = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) => (a.Title > b.Title ? 1 : -1));
    setInitalData(sortedData);
  };
  const HighToLow = () => {
    const newdata = [...intitalData];
    const sortedData = newdata.sort((a, b) => (b.Title > a.Title ? 1 : -1));
    setInitalData(sortedData);
  };

  const IncreaseOrder = () => {
    const aa = [...intitalData];
    const bb = aa.sort((a,b) => a["IMDB Rating"] > b["IMDB Rating"] ? 1 : -1);
    setInitalData(bb);
  };
  const DecreaseOrder = () => {
    const a = [...intitalData];
    const b = a.sort((a,b) => a["IMDB Rating"] < b["IMDB Rating"] ? 1 : -1);
    setInitalData(b);
  };
  const InOrder = () => {
    let cc = [...intitalData];
    const dd = cc.sort((a,b) => a["Worldwide Gross"] > b["Worldwide Gross"] ? 1 : -1);
    setInitalData(dd);
  };
  const DeOrder = () => {
    let c = [...intitalData];
    const d = c.sort((a,b) => a["Worldwide Gross"] < b["Worldwide Gross"] ? 1 : -1);
    setInitalData(d);
  };
  const InDateOrder = () => {
    let p = [...intitalData];
    const q = p.sort((a,b) => new Date(a["Release Date"]) < new Date(b["Release Date"]) ? 1 : -1);
    // const q = p.sort((a, b) => b.date - a.date)
    setInitalData(q);
  };
  const DeDateOrder = () => {
    let pp = [...intitalData];
    const qq = pp.sort((a,b) => new Date(b["Release Date"]) < new Date(a["Release Date"]) ? 1 : -1);
    setInitalData(qq);
  };
  const InRunOrder = () => {
    let ss = [...intitalData];
    const tt = ss.sort((a,b) => (b["Running Time min"]) < (a["Running Time min"]) ? 1 : -1);
    setInitalData(tt);
  };
  const DeRunOrder = () => {
    let s = [...intitalData];
    const t = s.sort((a,b) => (a["Running Time min"]) < (b["Running Time min"]) ? 1 : -1);
    setInitalData(t);
  };


  return (
    <>
      <h1 className='heading'>Welcome In Movies World</h1>
      {/* filter section */}
      <form 
        className="filter-form d-flex justify-content-around  align-items-center  flex-row  form"
        onSubmit={HandleFilter}
      >
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Movie"
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
        <button className="btn" type="submit">
          Filter
        </button>
      </form>

      {/* table section */}
      
        <table className="table">
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>
                Title
                <span>
                <i className="fa-solid fa-arrow-up-a-z button" onClick={LowToHigh} ></i>
                </span>
                <span>
                <i className="fa-solid fa-arrow-down-z-a button" onClick={HighToLow} ></i>
                </span>
                
              </th>
              <th>Release Date
              <span>
                <i class="fa-solid fa-arrow-down-1-9 button" onClick={InDateOrder} ></i>
                </span>
                <span>
                <i class="fa-solid fa-arrow-down-9-1 button" onClick={DeDateOrder} ></i>
                </span>
              </th>
              <th>Running Time
              <span>
                <i class="fa-solid fa-arrow-down-1-9 button" onClick={InRunOrder} ></i>
                </span>
                <span>
                <i class="fa-solid fa-arrow-down-9-1 button" onClick={DeRunOrder} ></i>
                </span>
              </th>
              <th>Genre</th>
              <th>IMDB Rating
                <span>
                <i class="fa-solid fa-arrow-down-1-9 button" onClick={IncreaseOrder} ></i>
                </span>
                <span>
                <i class="fa-solid fa-arrow-down-9-1 button" onClick={DecreaseOrder} ></i>
                </span>
              </th>
              <th>WorldWide Gross
              <span>
                <i class="fa-solid fa-arrow-down-1-9 button" onClick={InOrder} ></i>
                </span>
                <span>
                <i class="fa-solid fa-arrow-down-9-1 button" onClick={DeOrder} ></i>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {intitalData.map((data, index) => {
              const relesedate = data["Release Date"];
              const runningtime = data["Running Time min"];
              const gross = new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
              }).format(data["Worldwide Gross"]);
              const hrs = runningtime / 60;
              var rhours = Math.floor(hrs);
              const minutes = (hrs - rhours) * 60;
              var rminutes = Math.round(minutes);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{data.Title}</td>
                  <td>{moment(relesedate).format("DD/MMM/YYYY")}</td>
                  {runningtime === null ? (
                    <td> <span className="na">NA</span> </td>
                  ) : (
                    <td>
                      {rhours}H:{rminutes}M
                    </td>
                  )}

                  {data["Major Genre"] === null ? (
                    <td> <span className="na">NA</span>  </td>
                  ) : (
                    <td>{data["Major Genre"]}</td>
                  )}
                  {data["IMDB Rating"] === null ? (
                    <td> <span className="na">NA</span> </td>
                  ) : (
                    <td>{data["IMDB Rating"]}</td>
                  )}

                  <td>{gross}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    
    </>
  );
};
export default Movie;
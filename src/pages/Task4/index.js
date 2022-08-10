import React, { useState } from "react";
import DataTable from "./DataTable";
import moviesData from "./movies.json"
import classes from "./index.module.css";
import moment from 'moment';

function Task4() {
    const [inputs, setInputs] = useState({ textinput: "", startingDate: "", endingDate: "", rating: "", generes: "" })
    const [Data, setData] = useState(moviesData.filter(
        (record) => { return record["IMDB Rating"] > 6 }).sort((a, b) => { return b["IMDB Rating"] - a["IMDB Rating"] }).splice(0, 200))
    let newArray = []
    let ratings = [1,2,3,4,5,6,7,8,9,10]
    let checkData = []
    let geners = [];
    moviesData.map((item) => {
        if (item["Major Genre"] !== null) {
            geners.push(item["Major Genre"])
        }
    })
    let uniqueGenres = new Set(geners);

    function handleSubmit(e) {
        e.preventDefault();
    }

    moviesData.filter((record) => { 
        if (moment(record["Release Date"]).format('YYYY MM DD')>moment(inputs.startingDate).format('YYYY MM DD') && 
        moment(record["Release Date"]).format('YYYY MM DD')<moment(inputs.endingDate).format('YYYY MM DD') ) 
        {
            newArray.push(record)
        }
    })

    function filterResult() {
        if (inputs.generes === "All") {
            newArray.filter((record) => {
                if ( Math.round(record["IMDB Rating"]) == inputs.rating && 
                record.Title && 
                record.Title.toString().toLowerCase().includes(inputs.textinput)) 
                {
                    checkData.push(record)
                }
            })
        }
        else {
            newArray.filter((data)=>{
                if (Math.round(data["IMDB Rating"]) == inputs.rating && 
                data["Major Genre"] === inputs.generes &&
                data.Title && 
                data.Title.toString().toLowerCase().includes(inputs.textinput)) 
                {
                    checkData.push(data)
                }
            })
        }
        setData(checkData)
    }
    return <div>
        <h1>Filtering Data of Movies</h1>
        <form onSubmit={handleSubmit}>
            <div className={`${classes.formdata}`}>
                <label htmlFor="name">Name </label>
                <input type="text" id="name" value={inputs.textinput} placeholder='Enter Movie Name Here' 
                onChange={e => { setInputs({ ...inputs, textinput: e.target.value.toLowerCase() }) }} 
                className={`${classes.TextCapital}`} />
            </div>
            <div className={`${classes.formdata}`}>
                <label htmlFor="start">Starting Date </label>
                <input type="date" id="start" value={inputs.startingDate} 
                onChange={e => { setInputs({ ...inputs, startingDate: e.target.value }) }} />
            </div>
            <div className={`${classes.formdata}`}>
                <label htmlFor="end">Ending Date</label>
                <input type="date" id="end" value={inputs.endingDate} 
                onChange={e => { setInputs({ ...inputs, endingDate: e.target.value }) }} />
            </div>
            <div className={`${classes.formdata}`}>
                <select onChange={e => { setInputs({ ...inputs, rating: e.target.value }) }}>
                    <option value="SelectRating">Select Rating</option>
                    {
                        ratings.map((item)=>{ return (<option key={item}>{item}</option>)})
                    }
                </select>
            </div>
            <div className={`${classes.formdata}`}>
                <select onChange={e => { setInputs({ ...inputs, generes: e.target.value }) }}>
                    <option value="SelectGeneres">Select Generes</option>
                    <option value="All">All</option>
                    {
                        Array.from(uniqueGenres).map((item,index) => { return (<option key={index}>{item}</option>) })
                    }
                </select>
            </div>
            <div className={`${classes.formdata}`}>
                <button type="submit" onClick={(e) => { filterResult() }}>Submit</button>
            </div>
        </form>
        <br />
        <DataTable data={Data} />
    </div>
}

export default Task4;
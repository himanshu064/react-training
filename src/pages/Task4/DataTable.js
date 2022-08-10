import React from "react";
import classes from "./index.module.css";

function DataTable(props) {
    // console.log(props.data,"intable side")
    const convertMinsToHours = (mins) => {
        let hours = Math.floor(mins / 60);
        let minutes = mins % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} Hours`;
    }
    const changeToDollor = (number) => {
        return new Intl.NumberFormat('es-US', { style: 'currency', currency: 'USD' }).format(number)
    };
    return (
        <div className={`${classes.heading}`}>
            <table>

                <tbody >
                    <tr key={"headings"}>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Release Date</th>
                        <th>Time(Length)</th>
                        <th>Genere</th>
                        <th>Rating</th>
                        <th>Worldwide Gross</th>
                    </tr>
                    {
                        props.data && props.data.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item.Title}
                                    </td>
                                    <td>
                                        {item["Release Date"] ? item["Release Date"] : "Null"}
                                    </td>
                                    <td>
                                        {item["Running Time min"] ? convertMinsToHours(item["Running Time min"]) : "Null"}
                                    </td>
                                    <td>
                                        {item["Major Genre"] ? item["Major Genre"] : "Null"}
                                    </td>
                                    <td>
                                        {item["IMDB Rating"] ? item["IMDB Rating"] : "Null"}
                                    </td>
                                    <td>
                                        {item["Worldwide Gross"] ? changeToDollor(item["Worldwide Gross"]) : "Null"}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DataTable
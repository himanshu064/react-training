import React,{useState} from "react";
import AccordionComponent from "./Accordion";

function Posts({posts ,loading}) {
    if (loading) {
        console.log("loading...")
        return <h1>Loading...</h1>
    }

    return <ul>
        {posts.map((item,index) => {return <AccordionComponent />})}
    </ul>
}

export default Posts
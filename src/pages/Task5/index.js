import React, { useEffect, useState } from "react";
import axios from "axios";
import AccordionComponent from "./Accordion";
import App from "./Pagination";
import "./rc-select.css"

function Pagination() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentpage, setCurrenpage] = useState(1)
    const [postsperpage, setpostperpage] = useState(10)

    function pageNumberIs(pageNum,pageSize){
        console.log(pageNum,"pagenumber")
        setCurrenpage(pageNum)
        console.log(pageSize,"pagesize")
        setpostperpage(pageSize)
    }

    useEffect(() => {
        const fetching = async () => {
            setLoading(true)
            console.log(currentpage,"pagenumdfgber")
            console.log(postsperpage,"pagesizedfgdf")
            const res = await axios.get('https://dummyjson.com/posts?limit='+postsperpage+'&skip='+((currentpage-1)*postsperpage))
            setPosts(res.data.posts)
            setLoading(false)
        }
        fetching();
    }, [postsperpage,currentpage]);

    return <div>
        <h1>Yoo Data is Here</h1>
        <AccordionComponent posts={posts} loading={loading} />
        <App pageNumberIs={pageNumberIs} postsperpage={postsperpage} totalPosts={posts.length} />
    </div>
}
export default Pagination;
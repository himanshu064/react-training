// import React, { useState } from "react"
// import { Button } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux"
// import { incNumb, decNumb } from "./Action/index"

// function Application() {
//     const currentState = useSelector((state) => state.changeNumber )
//     const [increase , setincrese] = useState(1)
//     console.log(currentState,"check check")
//     const dispatch = useDispatch()
//     return (
//         <div style={{ textAlign: "center", marginTop: 50 }}>
//                     <Button variant="primary" onClick={()=>{dispatch(decNumb(increase))}} >-</Button>
//                     <input type="text" value={currentState} readOnly style={{ textAlign: "center" }} />
//                     <Button variant="primary" onClick={()=>{dispatch(incNumb(increase))}} >+</Button><br/><br/>
//                     <span>Enter number here </span>
//                     <input type="text" value={increase} onChange={(e)=>{setincrese(e.target.value)}} />
//                 </div>
//     )
// }
// export default Application
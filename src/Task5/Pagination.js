import React from 'react';

const Pagination = ({ totalPosts ,postperpage, paginate}) =>{
const pageNumbers = [];
for(let i=1; i <= Math.ceil(totalPosts / postperpage); i++){
pageNumbers.push(i)   
}

return(
    <nav>
     <ul className='pagination'>
     {pageNumbers.map((number)=>{
        return(
        <>
        <strong key={number} className= 'page-item'> <a onClick={() => paginate(number)} className='page-link'> {number}</a> </strong>
        </>
        )
     })}
     </ul>
    </nav>
)
}
export default Pagination;      
import React from 'react'
import ReactPaginate from 'react-paginate';

import './Pagination.style.css'


const Pagination = ({handlePageClick, pageCount}) => {
    return (
        <div className='pg_wrapper'>
            <ReactPaginate
                nextLabel={""}
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                marginPagesDisplayed={0}
                pageCount={pageCount}
                previousLabel={""}
                pageclassName={"pg-item"}
                pageLinkclassName={"page-link"}
                previousclassName={"pg-item__prev"}
                previousLinkclassName={""}
                nextclassName={"pg-item__next"}
                nextLinkclassName={""}
                breakLabel={"..."}
                breakclassName={"pg-item__dots"}
                breakLinkclassName={""}
                containerclassName={"pg"}
                activeclassName={"pg-item__curent"}
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Pagination

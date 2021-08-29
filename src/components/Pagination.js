import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const next = () => {
    if (currentPage !== pageNumbers[pageNumbers.length - 1]) {
      paginate(currentPage + 1);
    }
  };

  const prev = () => {
    if (currentPage !== pageNumbers[0]) {
      paginate(currentPage - 1);
    }
  };

  return pageNumbers.length > 1 ? (
    <div className="paginationwrapper">
      <ul className="pagination">
        <a onClick={prev} className="prev">
          &laquo;
        </a>
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active1 " : ""}>
            <a
              onClick={() => paginate(number)}
              // href=" "
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}

        <a onClick={next} className="next">
          &raquo;
        </a>
      </ul>
    </div>
  ) : (
    // <></>
    <div className="paginationwrapper ">
      <ul className="pagination singlepage">
        {/* <a onClick={prev} className="prev">
      &laquo;
    </a> */}
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active1 " : ""}>
            <a
              onClick={() => paginate(number)}
              //href="/items!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}

        {/* <a onClick={next} className="next">
      &raquo;
    </a> */}
      </ul>
    </div>
  );
};

export default Pagination;

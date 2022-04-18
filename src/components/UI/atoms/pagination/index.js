import React, { useCallback } from "react";
import { customDebounce } from "../../../../utils";

const Pagination = ({
  setPageNumber,
  gotoPage,
  pageNumber,
  pageCount,
  pageIndex,
}) => {
  const pageChange = (e) => {
    const page = e.target.value ? Number(e.target.value) : 1;
    setPageNumber(page);
  };
  const handlePageChange = useCallback(customDebounce(pageChange), []);
  return (
    <div className="pagination">
      <button onClick={() => setPageNumber(1)} disabled={pageNumber === 1}>
        {"<<"}
      </button>{" "}
      <button
        onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
        disabled={pageNumber === 1}
      >
        {"<"}
      </button>{" "}
      <button
        onClick={() => setPageNumber(Math.min(pageCount, pageNumber + 1))}
        disabled={pageCount === pageNumber}
      >
        {">"}
      </button>{" "}
      <button
        onClick={() => setPageNumber(pageCount)}
        disabled={pageCount === pageNumber}
      >
        {">>"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {pageNumber} of {pageCount}
        </strong>{" "}
      </span>
      <span>
        | Go to page:{" "}
        <input
          type="number"
          defaultValue={pageNumber}
          onChange={handlePageChange}
          style={{ width: "100px" }}
        />
      </span>{" "}
    </div>
  );
};

export default Pagination;

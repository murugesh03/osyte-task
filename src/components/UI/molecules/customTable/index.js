import React from "react";
import { useTable, usePagination } from "react-table";
import styled from "styled-components";

import Pagination from "../../atoms/pagination";
import Table from "../../atoms/table";

const Styles = styled.div`
  padding: 1rem;
  table {
    width: 100%;
    tr {
      td {
        text-align: center;
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
    }
  }
  .pagination {
    padding: 0.5rem;
    text-align: center;
  }
`;

const CustomTable = ({
  columns,
  data,
  totalResults,
  pageNumber,
  setPageNumber,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    changePage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 1,
        pageSize: 20,
      },
      manualPagination: true,
      pageCount: Math.ceil(totalResults / 20),
    },
    usePagination
  );
  return (
    <Styles>
      <Table
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        page={page}
        prepareRow={prepareRow}
        headerGroups={headerGroups}
      />
      <Pagination
        setPageNumber={setPageNumber}
        gotoPage={gotoPage}
        pageNumber={pageNumber}
        pageCount={pageCount}
        pageIndex={pageIndex}
      />
    </Styles>
  );
};

export default CustomTable;

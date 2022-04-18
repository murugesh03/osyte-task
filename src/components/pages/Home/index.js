import React, { useEffect, useMemo, useState } from "react";
import moment from "moment";
import { Spinner } from "@blueprintjs/core";

import CustomTable from "../../UI/molecules/customTable";
import { useMovieStore } from "../../../store";
import { useGetMovies } from "../../../hooks/useGetMovies";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const storeMovies = useMovieStore((state) => state.storeNewMovies);

  const { isLoading, data, refetch } = useGetMovies(currentPage);

  useEffect(() => {
    refetch();
  }, [currentPage]);

  useEffect(() => {
    if (!!data?.data?.results.length) {
      storeMovies(changeMovieData(data.data.results));
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [data]);

  const changeMovieData = (data) => {
    let revisedMovieData = data.map((ele) => {
      return {
        ...ele,
        poster_path_full: `${process.env.REACT_APP_IMAGE_URL}${ele.poster_path}`,
      };
    });

    return revisedMovieData;
  };

  const columns = useMemo(() => [
    {
      Header: "Movie Image",
      accessor: "poster_path_full",
      Cell: ({ cell: { value } }) => (
        <img src={value} loading="lazy" width={100} alt={value} />
      ),
    },
    {
      Header: "Movie Title",
      accessor: "title",
    },
    {
      Header: "Release Date",
      accessor: "release_date",
      Cell: ({ cell: { value } }) => <span>{moment(value).format("LL")}</span>,
    },
    {
      Header: "Language",
      accessor: "original_language",
    },
    {
      Header: "Rating",
      accessor: "vote_average",
      Cell: ({ cell: { value } }) => <span>{value}/10</span>,
    },
  ]);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            display: "block",
            width: 500,
            padding: 30,
          }}
        >
          <Spinner size={30} />
        </div>
      ) : (
        data?.data?.results.length && (
          <div className="container">
            <CustomTable
              columns={columns}
              data={changeMovieData(data.data.results)}
              totalResults={data.data.total_results}
              pageNumber={currentPage}
              setPageNumber={setCurrentPage}
            />
          </div>
        )
      )}
    </>
  );
};

export default Home;

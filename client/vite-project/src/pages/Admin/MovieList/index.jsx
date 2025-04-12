import React, { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import { getAllMovies } from "../../../apiCalls/movies";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      //   dispatch(showLoading());
      const response = await getAllMovies();
      if (response.success) {
        setMovies(response.data);
        console.log(movies);
      } else {
        // message.error(response.message);
      }
      //   dispatch(hideLoading());
    } catch (err) {
      console.log(err);
      //   message.error(err.message);
      //   dispatch(hideLoading());
    }
  };

  const columns = [
    {
      title: "Poster",
      dataIndex: "poster",
      key: "poster",
      render: (poster) => <img src={poster} alt="" width={80} height={100} />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    // },

    {
      title: "Genre",
      key: "genere",
      dataIndex: "genre",
    },

    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      key: "releaseDate",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={movies} />
    </div>
  );
}

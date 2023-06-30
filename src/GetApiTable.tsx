// get api test
// import React, { useState, useEffect } from 'react';
import * as React from "react";
import CustomTable from "./CustomTable"; // 必要に応じて適切なパスを指定
import axios from "axios"; // axiosを使用してAPIリクエストを行う

function GetApiTable() {
  const [data, setData] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  // APIからデータを取得する
  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);

      // 列データを動的に生成する
      if (res.data.length > 0) {
        setColumns(
          Object.keys(res.data[0]).map((key) => ({
            field: key,
            headerName: key
          }))
        );
      }
    });
  }, []);

  return <CustomTable rows={data} columns={columns} />;
}

export default GetApiTable;

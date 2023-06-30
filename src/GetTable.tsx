// get component test
import * as React from "react";
import CustomTable from "./CustomTable"; // 必要に応じて適切なパスを指定

// 行データの例
const rows = [
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    color: "Red"
  },
  {
    id: 2,
    name: "Orange",
    category: "Fruit",
    color: "Orange"
  },
  {
    id: 3,
    name: "Banana",
    category: "Fruit",
    color: "Yellow"
  }
];

// 列データの例
const columns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" },
  { field: "category", headerName: "Category" },
  { field: "color", headerName: "Color" }
];

export function GetTable() {
  return <CustomTable rows={rows} columns={columns} />;
}

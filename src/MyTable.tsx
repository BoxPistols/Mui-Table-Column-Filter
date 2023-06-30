import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  FormControlLabel,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Button
} from "@mui/material";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";

function MyTable() {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "姓" },
    { field: "lastName", headerName: "名" },
    { field: "add", headerName: "住所" },
    { field: "details", headerName: "詳細情報" }
  ];

  const rows = [
    {
      id: 1,
      firstName: "山田",
      lastName: "太郎",
      add: "北海道札幌市中央区南1条西2丁目",
      details: "北海道出身で寒さに強い。趣味はスキーと読書。"
    },
    {
      id: 2,
      firstName: "吉岡",
      lastName: "秀介",
      add: "広島県広島市中区基町1-4",
      details: "広島出身で広島カープファン。週末はよく野球観戦に行く。"
    },
    {
      id: 3,
      firstName: "前島",
      lastName: "夏菜子",
      add: "新潟県新潟市中央区笹口通1番町",
      details: "新潟出身で新潟のお米と魚が大好き。趣味は料理と旅行。"
    },
    {
      id: 3,
      firstName: "前島",
      lastName: "夏菜子",
      add: "新潟県新潟市中央区笹口通1番町",
      details: "新潟出身で新潟のお米と魚が大好き。趣味は料理と旅行。"
    },
    {
      id: 3,
      firstName: "前島",
      lastName: "夏菜子",
      add: "新潟県新潟市中央区笹口通1番町",
      details: "新潟出身で新潟のお米と魚が大好き。趣味は料理と旅行。"
    },
    {
      id: 3,
      firstName: "前島",
      lastName: "夏菜子",
      add: "新潟県新潟市中央区笹口通1番町",
      details: "新潟出身で新潟のお米と魚が大好き。趣味は料理と旅行。"
    },
    {
      id: 3,
      firstName: "前島",
      lastName: "夏菜子",
      add: "新潟県新潟市中央区笹口通1番町",
      details: "新潟出身で新潟のお米と魚が大好き。趣味は料理と旅行。"
    },
    {
      id: 3,
      firstName: "前島",
      lastName: "夏菜子",
      add: "新潟県新潟市中央区笹口通1番町",
      details: "新潟出身で新潟のお米と魚が大好き。趣味は料理と旅行。"
    }
  ];

  const toggleColumnVisibility = (field: string) => {
    if (hiddenColumns.includes(field)) {
      setHiddenColumns(hiddenColumns.filter((column) => column !== field));
    } else {
      setHiddenColumns([...hiddenColumns, field]);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowAll = () => {
    setHiddenColumns([]);
  };

  const handleHideAll = () => {
    setHiddenColumns(columns.map((column) => column.field));
  };

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="flex-end" sx={{ pr: 1 }}>
          <IconButton onClick={handleClick}>
            <ToggleOnOutlinedIcon sx={{ fontSize: 38 }} color="primary" />
          </IconButton>
        </Box>
      </Box>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {columns.map((column) => (
          <MenuItem key={column.field} sx={{ minWidth: 180, pl: 3, pt: 0 }}>
            <FormControlLabel
              control={
                <Switch
                  checked={!hiddenColumns.includes(column.field)}
                  onChange={() => toggleColumnVisibility(column.field)}
                  size="small"
                />
              }
              label={column.headerName}
            />
          </MenuItem>
        ))}
        <Box display="flex">
          <MenuItem>
            <Button variant="text" onClick={handleShowAll} size="small">
              全て表示
            </Button>
          </MenuItem>
          <MenuItem>
            <Button variant="text" onClick={handleHideAll} size="small">
              全て非表示
            </Button>
          </MenuItem>
        </Box>
        <Box display="flex" justifyContent="center">
          <MenuItem>
            <Button variant="outlined" onClick={handleClose} size="small">
              閉じる
            </Button>
          </MenuItem>
        </Box>
      </Menu>

      <TableContainer
        component={Paper}
        sx={{
          position: "relative",
          height: 200
        }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map(
                (column) =>
                  !hiddenColumns.includes(column.field) && (
                    <TableCell key={column.field}>
                      {column.headerName}
                    </TableCell>
                  )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                {columns.map(
                  (column) =>
                    !hiddenColumns.includes(column.field) && (
                      <TableCell key={column.field}>
                        {row[column.field]}
                      </TableCell>
                    )
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MyTable;

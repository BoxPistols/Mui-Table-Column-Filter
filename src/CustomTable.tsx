// to Component
import * as React from "react";
// import React, { useState } from 'react';
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

function CustomTable({ rows, columns }) {
  const [hiddenColumns, setHiddenColumns] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const toggleColumnVisibility = (field) => {
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
          <MenuItem key={column.field}>
            <FormControlLabel
              control={
                <Switch
                  checked={!hiddenColumns.includes(column.field)}
                  onChange={() => toggleColumnVisibility(column.field)}
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

      <TableContainer component={Paper}>
        <Table>
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

export default CustomTable;

import * as ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import MyTable from "./MyTable";
import { Container, Divider, Typography } from "@mui/material";

ReactDOM.createRoot(document.querySelector("#app")).render(
  <React.StrictMode>
    <Container sx={{ py: 4, px: 5 }}>
      <Typography variant="h5">Column Select</Typography>
      <MyTable />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5">Dat Grid</Typography>
      <App />
    </Container>
  </React.StrictMode>
);

import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box sx={{ my: 2 }}>
          <Outlet />
        </Box>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;

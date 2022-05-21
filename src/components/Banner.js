import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";

function Banner() {
  return (
    <Box sx={{ paddingTop: 6, paddingBottom: 6, textAlign: "center" }}>
      <Typography variant="h2" component="h2" sx={{ color: orange[500] }}>
        Rote Math
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        sx={{ marginTop: 2, marginBottom: 4 }}
      >
        Learn math the hard way! A simple game to help math students memorize
        basic addition and multiplication problems.
      </Typography>
      <Button component={Link} to="/play" size="large" variant="contained">
        Play
      </Button>
    </Box>
  );
}

export default Banner;

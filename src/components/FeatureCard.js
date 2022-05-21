import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function FeatureCard(props) {
  return (
    <Box sx={{ textAlign: "center", marginTop: 4, marginBottom: 4 }}>
      <FlashOnIcon color="primary" sx={{ fontSize: 48 }} />
      <Typography
        variant="h5"
        component="h5"
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        {props.title}
      </Typography>
      <Typography sx={{ textAlign: "initial" }}>{props.description}</Typography>
    </Box>
  );
}

export default FeatureCard;

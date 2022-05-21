import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = styled(LinearProgress)(() => ({
  "& .MuiLinearProgress-bar": {
    transition: "none",
  },
}));

function ProgressIndicator(props) {
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    const timer = setInterval(() => {
      const progress = Math.max(
        Math.floor(props.game.percentageTimeLeft * 100) - 5,
        0
      );
      setProgress(progress);
    }, 100);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <ProgressBar
      sx={{
        bar: {
          transition: "none",
        },
      }}
      variant="determinate"
      value={progress}
    />
  );
}

export default React.memo(ProgressIndicator);

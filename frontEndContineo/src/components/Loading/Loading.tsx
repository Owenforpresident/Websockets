import { CircularProgress } from "@mui/material";
import "./Loading.styles.css";

const Loading = () => {
  return (
    <div className="loading" data-testid="loading-component">
      <CircularProgress data-testid="circular-progress" />
    </div>
  );
};

export default Loading;

import Typography from '@mui/material/Typography';
import './Error.styles.css';

const ErrorComponent = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <Typography variant="h2">Error</Typography>
        <Typography variant="body1">An error occurred while fetching data</Typography>
        <Typography variant="body1">Please try again later or contact support for assistance.</Typography>
      </div>
    </div>
  );
};

export default ErrorComponent;

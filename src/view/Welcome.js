import "../App.css";
import Layout from '../components/Layout';
import { styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#002884'),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
}));

const card = (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <Card sx={{ maxWidth: 800 , maxHeight: 800 }} variant="outlined">
      <CardMedia
        component="img"
        height="440"
        image={require("../assets/images/welcome-kerry.png")}
      />

      <CardContent>
        <Typography variant="body2" gutterBottom component="div">
          Welcome to <span style={{color: orange[500]}}>Kerry Express</span>
        </Typography>
        <Typography gutterBottom variant="h4">
          Kerry1234
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        <ColorButton>Back to home</ColorButton>
      </CardActions>
    </Card>
  </Box>
);

const Welcome = () => {
  return (
    <div>
      <div className="background"></div>
      <div className="font-brand-kerry" variant="h3">
        KERRY
      </div>
      <div className="font-brand-express" variant="h5">
        EXPRESS
      </div>

      <div className="card">
        <Layout zIndex={2} element={card} />
      </div>
    </div>
  );
};

export default Welcome;
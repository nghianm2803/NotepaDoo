import { Link as RouterLink, useRouteError } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";
import NotFoundImage from "../assets/404.svg";

function ErrorPage() {
  const error = useRouteError();
  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: "center",
        height: "100%",
        marginTop: "50px",
      }}
    >
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <Box
          component="img"
          alt="Have an Error"
          src={NotFoundImage}
          sx={{ width: "300px" }}
        />
        <Typography variant="h4" paragraph>
          404 ERROR
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: "1rem" }}>
          Opps. Have an error, please try again or go Home.
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: "1rem" }}>
          {error.statusText || error.message}
        </Typography>
        <Button to="/" variant="contained" component={RouterLink}>
          Go to Home
        </Button>
      </Box>
    </Container>
  );
}

export default ErrorPage;

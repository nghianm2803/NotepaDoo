import { Link as RouterLink, useRouteError } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";

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
        <Typography variant="h4" paragraph>
          Page not found!
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: "1rem" }}>
          Sorry, we couldn't find the page you requested.
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

import { Box, Container, Grid, Stack } from "@mui/material";
import FolderList from "../components/FolderList";
import MainHeader from "../layouts/MainHeader";
import MainFooter from "../layouts/MainFooter";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Home() {
  const { folders } = useLoaderData();
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: "10px" }}>
        <Grid
          container
          sx={{
            height: "70vh",
            boxShadow: "0 0 15px 0 rgb(193 193 193 / 60%)",
          }}
        >
          <Grid item xs={3} sx={{ height: "100%" }}>
            <FolderList folders={folders} />
          </Grid>
          <Grid item xs={9} sx={{ height: "100%" }}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
    </Stack>
  );
}

import { Box, Button, Card, Container, Typography } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { graphQLRequest } from "../utils/request";
import GoogleIcon from "../assets/google-icon.png";

export default function Login() {
  const auth = getAuth();

  /**
   * Can not use useNavigate hook outside of useEffect. Use Navigate instead.
   * @author Doocharsiu
   */
  // const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    const {
      user: { uid, displayName },
    } = await signInWithPopup(auth, provider);

    const { data } = await graphQLRequest({
      query: `mutation register($uid: String!, $name: String!) {
      register(uid: $uid, name: $name) {
        uid
        name
      }
    }`,
      variables: {
        uid,
        name: displayName,
      },
    });
    console.log("register", { data });
  };

  if (localStorage.getItem("accessToken")) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", marginTop: "50px" }}>
      <Typography variant="h5" sx={{ marginBottom: "10px" }}>
        Welcome to NotepaDoo
      </Typography>
      <Card
        variant="outlined"
        sx={{
          margin: "auto",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          overflow: "hidden",
          cursor: "pointer",
          width: 230,
          mt: 5,
        }}
        onClick={handleLoginWithGoogle}
      >
        <Box
          component="img"
          sx={{
            height: 33,
            width: 33,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="google"
          src={GoogleIcon}
        />
        <Button>Login with Google</Button>
      </Card>
    </Container>
  );
}

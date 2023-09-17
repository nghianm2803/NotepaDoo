import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  AppBar,
  IconButton,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { useThemeContext } from "../theme";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Logo from "../components/Logo";
import { Avatar, Divider } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";

function MainHeader() {
  const {
    user: { email, displayName, photoURL, auth },
  } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const { toggleTheme, theme } = useThemeContext();

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Box sx={{ my: 1.5, px: 2.5 }}>
        <Typography variant="subtitle2" noWrap>
          {displayName}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {email}
        </Typography>
      </Box>

      <Divider sx={{ borderStyle: "dashed" }} />

      <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ mb: 12 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            NotepaDoo
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Button
                variant="primary"
                onClick={toggleTheme}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "20px",
                }}
              >
                <LightModeIcon
                  sx={{
                    cursor: "pointer",
                    color: "#FFF",
                  }}
                />
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={toggleTheme}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "20px",
                }}
              >
                <DarkModeIcon
                  sx={{
                    cursor: "pointer",
                    color: "#000",
                  }}
                />
              </Button>
            )}
            <Box
              onClick={handleProfileMenuOpen}
              sx={{
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <Avatar
                onClick={handleProfileMenuOpen}
                src={photoURL}
                alt={displayName}
                sx={{
                  width: 35,
                  height: 35,
                  marginRight: "10px",
                }}
              />
              <Typography>{displayName}</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}

export default MainHeader;

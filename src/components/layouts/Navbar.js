// packages
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Container,
  Badge,
  Avatar,
  useTheme,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { alpha } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
// datas
import { SETTING } from "../../datas";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSettng, setOpenSetting] = useState(false);

  const theme = useTheme();
  // styles
  const styles = {
    appbar: {
      height: "70px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    logoLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    logoSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      borderRadius: theme.shape.borderRadius,
      padding: "0.3rem",
      width: "50%",
      [theme.breakpoints.down("sm")]: {
        display: open ? "flex" : "none",
        width: "70%",
      },
    },
    input: {
      width: "100%",
    },
    close: {
      margin: "0 0.5rem",
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: open ? "flex" : "none",
      },
    },
    searchButton: {
      marginRight: theme.spacing(4),
      display: "none",
      [theme.breakpoints.down("sm")]: {
        display: "flex",
      },
    },
    icons: {
      display: "flex",
      alignItems: "center",
      display: open ? "none" : "flex",
    },
    badge: {
      marginRight: theme.spacing(4),
    },
  };

  return (
    <AppBar sx={styles.appbar}>
      <Container maxWidth="xl" sx={{ margin: "auto" }}>
        <Toolbar sx={styles.toolbar}>
          <Typography component="h2" variant="h6" sx={styles.logoLg}>
            Panak Media
          </Typography>
          <Typography component="h2" variant="h6" sx={styles.logoSm}>
            Panak
          </Typography>
          <Box component="div" sx={styles.search}>
            <SearchIcon sx={{ margin: "0 0.5rem" }} />
            <InputBase placeholder="Search..." sx={styles.input} />
            <CloseIcon sx={styles.close} onClick={() => setOpen(false)} />
          </Box>
          <Box component="div" sx={styles.icons}>
            <SearchIcon
              sx={styles.searchButton}
              onClick={() => setOpen(true)}
            />
            <Badge badgeContent={4} color="secondary" sx={styles.badge}>
              <MailIcon />
            </Badge>
            <Badge badgeContent={3} color="secondary" sx={styles.badge}>
              <NotificationsIcon />
            </Badge>
            <Box>
              <Tooltip title="Open Setting" onClick={() => setOpenSetting(true)}>
                <IconButton>
                  <Avatar
                    alt="user"
                    src="https://man-man.nl/app/uploads/2021/01/Ana-de-Armas.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "3rem", }}
                id="menu-appbar"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                open={openSettng}
                onClose={() => setOpenSetting(false)}
              >
                {SETTING.map((item, index) => (
                  <MenuItem key={index}>
                    <Typography textAlign="center">{item}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

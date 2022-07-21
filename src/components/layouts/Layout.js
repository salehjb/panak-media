// components
import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Feed from "./Feed";
import Add from "../shared/Add";
// packages
import { Grid, useTheme } from "@mui/material";

function Layout({ children }) {
  const theme = useTheme();

  const styles = {
    right: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };

  return (
    <>
      <Navbar />
      <Grid container sx={{ display: "flex", flexWrap: "nowrap" }}>
        <Grid item sm={2}>
          <Leftbar />
        </Grid>
        <Grid item sm={7}>
          <Feed>{children}</Feed>
        </Grid>
        <Grid item sm={3} sx={styles.right}>
          <Rightbar />
        </Grid>
      </Grid>
      <Add />
    </>
  );
}

export default Layout;

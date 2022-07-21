import Link from "next/link";
import { useRouter } from "next/router";
// packages
import { Container, Grid, Typography, useTheme } from "@mui/material";
// datas
import { LEFT_BAR_ITEMS } from "../../datas";

function Leftbar() {
  const pathname = useRouter().pathname;
  const active = LEFT_BAR_ITEMS.findIndex((item) => pathname === item.href);

  const theme = useTheme();
  // styles
  const styles = {
    container: {
      padding: `${theme.spacing(13)} 0 0 0 !important`,
      backgroundColor: theme.palette.primary.dark,
      height: "100vh",
      position: "sticky",
      top: "0",
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
    },
    item: {
      display: "flex",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        marginBottom: theme.spacing(2.5),
        cursor: "pointer",
      },
    },
    link: {
      display: "flex",
      padding: "0.5rem 1rem"
    },
    activeLink: {
      display: "flex",
      backgroundColor: theme.palette.secondary.dark,
      width: "100%",
      padding: "0.5rem 1rem"
    },
    icon: {
      marginRight: theme.spacing(1.5),
      [theme.breakpoints.down("sm")]: {
        margin: "0 auto",
      },
    },
    text: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };

  return (
    <Container sx={styles.container} p={0}>
      <Grid container sx={styles.gridContainer}>
        {LEFT_BAR_ITEMS.map((item, index) => {
          const IconTag = item.icon;
          return (
            <Grid item sx={styles.item} key={index}>
              <Link href={item.href}>
                <a style={active === index ? styles.activeLink : styles.link}>
                  <IconTag sx={styles.icon} />
                  <Typography sx={styles.text}>{item.text}</Typography>
                </a>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Leftbar;

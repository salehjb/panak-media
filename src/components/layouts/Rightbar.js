// packages
import {
  Avatar,
  AvatarGroup,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
} from "@mui/material";
// datas
import { ONLINE_FRIENDS, IMAGE_LIST } from "../../datas";

function Rightbar() {
  const theme = useTheme();

  // styles
  const styles = {
    container: {
      paddingTop: theme.spacing(13),
    },
    gridContainer: {
      display: "flex",
      flexDirection: "column",
    },
    gridItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start"
    },
    imageList: {
      borderRadius: "5px"
    },
  };

  return (
    <Container sx={styles.container}>
      <Grid container sx={styles.gridContainer} spacing={3}>
        <Grid item sx={styles.gridItem}>
          <Typography variant="h6" gutterBottom>
            Online Friends
          </Typography>
          <AvatarGroup max={6}>
            {ONLINE_FRIENDS.map((item, index) => (
              <Avatar alt={item.name} src={item.avatar} key={index} />
            ))}
          </AvatarGroup>
        </Grid>
        <Grid item>
          <Typography variant="h6" gutterBottom>
            Gallery
          </Typography>
          <ImageList rowHeight={200} sx={styles.imageList} cols={2} variant="quilted">
            {IMAGE_LIST.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item.image} alt={item.title} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Rightbar;

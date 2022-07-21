// packages
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

function Post({ title, text, image }) {
  const theme = useTheme();

  // styles
  const styles = {
    card: {
      marginBottom: theme.spacing(5)
    },
    media: {
      height: 400,
      [theme.breakpoints.down("sm")]: {
        height: 200,
      }
    }
  };

  return (
    <Card sx={styles.card}>
      <CardActionArea>
        <CardMedia
          sx={styles.media}
          image={image}
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{title}</Typography>
          <Typography variant="p">{text}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary">Share</Button>
        <Button size="small" color="secondary">Learn more</Button>
      </CardActions>
    </Card>
  );
}

export default Post;

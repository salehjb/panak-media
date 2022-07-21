// packages
import { Container, useTheme } from "@mui/material";

function Feed({children}) {
  const theme = useTheme();
  
  // styles 
  const styles = {
    container: {
      paddingTop: theme.spacing(13), 
    }
  }

  return (
    <Container sx={styles.container}>
      {children}
    </Container>
  )
}

export default Feed
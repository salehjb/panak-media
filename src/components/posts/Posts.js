// packages
import { Grid } from "@mui/material";
// components
import Post from "./Post";
// datas
import { POSTS } from "../../datas";

function Posts() {
  return (
    <Grid container>
      {POSTS.map((post, index) => (
        <Grid item key={index}>
          <Post {...post} />  
        </Grid>
      ))}  
    </Grid>
  )
}

export default Posts
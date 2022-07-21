import { useState } from "react";
// packages
import {
  Alert,
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
  Tooltip,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Add() {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  }

  const theme = useTheme();
  // styles
  const styles = {
    fab: {
      position: "fixed",
      bottom: 20,
      right: 20,
    },
    modalContainer: {
      width: 500,
      height: 550,
      backgroundColor: "primary.dark",
      position: "absolute",
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
        height: "100vh",
      },
      [theme.breakpoints.up("sm")]: {
        borderRadius: theme.shape.borderRadius,
      },
    },
    form: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
    },
    item: {
      marginBottom: theme.spacing(2),
    },
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="secondary" sx={styles.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container maxWidth="xl" sx={styles.modalContainer}>
          <Grid container sx={styles.form}>
            <Grid item sx={styles.item}>
              <TextField
                label="Title"
                size="small"
                sx={{ width: "100%" }}
                variant="outlined"
              />
            </Grid>
            <Grid item sx={styles.item}>
              <TextField
                label="Description"
                size="small"
                multiline
                rows={4}
                placeholder="Tell your story..."
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid item sx={styles.item}>
              <TextField select label="Visibility" sx={{ width: "150px" }}>
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </Grid>
            <Grid item sx={styles.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup aria-label="gender">
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ marginRight: 2 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Your post has been successfully registered
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;

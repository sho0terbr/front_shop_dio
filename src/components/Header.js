import React from "react";

import {
  Typography,
  Button,
  AppBar,
  Toolbar,
    makeStyles,
} from "@material-ui/core/";
import Cart from "./Cart";


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Heroes Shopping
        </Typography>

        <Button href="/" color="inherit" underline="none">
          Home
        </Button>

        <Button href="/contato" color="inherit" underline="none">
          Contato
        </Button>
        <Cart />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

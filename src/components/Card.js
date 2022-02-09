import React from 'react';
import { Paper, Grid, Typography, Button, makeStyles} from '@material-ui/core/';
import { useSelector, useDispatch } from 'react-redux';
import cartActions from './store/actions/cart';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center'
    },
  }));

const Card = ({ product, children }) => {
    const cart = useSelector( state => state.cart.value )
    const dispatch = useDispatch();
    const classes = useStyles();

    return(
        <Grid item xs>
            <Paper className={classes.paper}>
                <Grid item xs container direction='column'>
                    <Grid item xs>
                    <img width="230px" height="150px" src={product.image} alt={product.name_product}/>
                    <Typography variant='h5'>
                        {children}
                    </Typography>
                    <Typography variant='h6'>
                        R$ {product.price.toFixed(0)}
                    </Typography>
                    </Grid>
                
                <Button 
                    variant="contained"
                    onClick={()=>dispatch(cartActions.Add(cart, product))}
                >
                    Adicionar
                </Button>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Card;

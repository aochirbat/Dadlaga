import React from 'react';
import z from '../Images/8.jpg'
import { makeStyles ,ThemeProvider,useTheme} from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
 // requires a loader

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
    Home: {
        
        flexGrow: 1,
         color: 'black'
      },
      root: {
        maxWidth: '100%',
        justify: "space-between",
        alignItems: "center"
      },
      media: {
        height: 200,
        
     
    
      },
 
  }));
export default function MainHome()
{
    const classes = useStyles();
    return(
        <div >
      
        <Grid container direction="column"  xs={12} className={classes.Home} >
            <Grid item xs={4}>
                <div  >  
                    <img src={z} />
                </div>
             </Grid>
            <Grid item xs={12} >
            <div>
                <Container>
            <Grid container direction="row" xs={12} spacing={3}   >
   
                <Grid item xs={4}>
                    <Card >
                        <CardActionArea>
                             <CardMedia
                                className={classes.media}
                                image={z}
                                title="Contemplative Reptile"
                            />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                          Эрүүл хооллолт
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                     Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
          

         
                <Grid item xs={4}>
                    <Card>
                        <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={z}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Эрүүл хооллолт
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                    </Card>
                </Grid>
           

            
                <Grid item xs={4}>
                    <Card>
                        <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={z}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Эрүүл хооллолт
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                
        </Grid>
        </Container>
        </div>
        </Grid>
        
        
        <Grid item xs={4}>
            <h1> sada </h1>
        </Grid>
    </Grid>           
            
        
            
      
        </div>
    )
}
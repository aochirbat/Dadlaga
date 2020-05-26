import React from 'react';
import z from '../Images/8.jpg'
import { makeStyles ,ThemeProvider,useTheme} from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Navbar from '../components/Navbar';
import card1 from '../Images/1.jpg'
import card2 from '../Images/2.jpg'
import card3 from '../Images/3.jpg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as LinkDom } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import x from '../Images/6.jpg';
import n from '../Images/7.jpg'
const useStyles = makeStyles((theme) => ({
    Home: {
        
        flexGrow: 1,
         color: 'black'
      },
      root: {
       maxWidth:'100%',
       paddingLeft: theme.spacing(4),
 
    
      },
     
      media: {
        height: 350,
        
        
     
    
      },
 
  }));
export default function MainHome()
{
    const classes = useStyles();
    return(
        
        <div >
           
        <Grid container direction="column"  xs={12} className={classes.Home}  >
        <Navbar/>
      
            <Grid item xs={12}>
            <div
   
   style={{ width: 1920}}
  >
    <Carousel autoPlay={4000}
  animationSpeed={2000}
  centered
  
  infinite >
      <img src={n} width='100%' height='100%' />
      <img src={z} width='100%' height='100%'/>
      <img src={x} width='100%' height='100%' />
    </Carousel>
  </div>
             </Grid>
           
           
                                        <Grid item xs={12} >
                                        
                                        
                                        <div style={{width: '80%', marginLeft: '10%'}}>
                                    
                                        <Grid container direction="row" xs={12} spacing={10} className={classes.root}   >
                                    
                                            <Grid item xs={12} md={6} lg={4} >
                                            <a target='blank'href='https://www.youtube.com/watch?v=41wV-_fdsV0' component={LinkDom} style={{ textDecoration: 'none' }} >
                                                <Card >
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={card1}
                                                            title="Зөвөлгөө"
                                                        />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    Эрүүл хооллолт
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                Эрүүл хооллолт гэдэг нь чанга хатуу хоолны дэглэм барих, хэтэрхий туранхай байх,
                                                                хоол хүнснийхээ хэрэглээг хязгаарлаж, дуртай хоол хүнснээсээ татгалзана гэсэн үг биш юм.
                                                                Харин хоол, хүнсээ зөв сонгон, зохистой бэлтгэн хэрэглэж, түүгээрээ дамжуулан таатай мэдрэмж, эрч хүч авах явдал билээ...
                                                                </Typography>
                                                            </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                                </a>
                                            </Grid>
                                    

                                            <Grid item xs={12} md={6} lg={4} >
                                            <a target='blank'href='https://www.youtube.com/watch?v=ml6cT4AZdqI' component={LinkDom} style={{ textDecoration: 'none' }}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={card2}
                                                            title="Зөвөлгөө"
                                                        />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    Дасгал хөдөлгөөн
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p" underline>
                                                                Дасгал гэдэг нь эрүүл чийрэг, зөв галбиртай болох, түүнийгээ хадгалж байхын тулд тодорхой үйлдлийг зорилготой, 
                                                                төлөвлөгөөтэй , олон давталттай, эрэмбэ дараалалтай хийдэг хөдөлгөөний цэгцтэй жор юм. эрүүл амьдралын хамгийн
                                                                энгийн жор нь дасгал хөдөлгөөн гэдэгтэй санал нийлэх хүн олон биз ээ...
                                    
                                                                </Typography>
                                                            </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                                </a>
                                            </Grid>
                                        
                                            <Grid item xs={12} md={6} lg={4} >
                                            <a target='blank'href='https://www.youtube.com/watch?v=8YDd8Wgjj28' component={LinkDom} style={{ textDecoration: 'none' }}>
                                                <Card >
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className={classes.media}
                                                            image={card3}
                                                            title="Зөвөлгөө"
                                                        />
                                                            <CardContent>
                                                                <Typography gutterBottom variant="h5" component="h2">
                                                                    Стресс болон тайвшрал
                                                                </Typography>
                                                                <Typography variant="body2" color="textSecondary" component="p">
                                                                Стресс гэдэг нь организмд ямар нэг гадаад болон дотоод цочроогчоос
                                                                үүсч байгаа нөлөөллийн бие болон оюун санааны хариу үйлдэл юм. Стрессээс хурдан ангижрах үр дүнтэй аргуудын нэг бол 
                                                                Йога юм. Йога нь та бидний эрхтэн тогтолцоонд нийлэмж, сэтгэлийн тэнцвэр хатыг бий болгох ач тустай...
                                                                </Typography>
                                                            </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                                </a>
                                             </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
           
                                    
        
                            
       
       
    <Grid item xs={12}>
            <h1> sada </h1>
        </Grid>
    </Grid>           
            
        
            
      
        </div>
    )
}
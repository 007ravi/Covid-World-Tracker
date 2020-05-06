import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup'
import cx from 'classnames';
const Cards=(props)=>{
    const {data:{confirmed,recovered,deaths,lastUpdate}}=props;
    if(!confirmed)
    return (<h1>loading...</h1>)
    console.log(confirmed);
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
             <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.infected)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography varaint='h5'>
                       <CountUp 
                       start={0}
                      end= {confirmed.value}
                      duration={3}
                      separator=','
                       />
                        </Typography>
                     <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography varaint='body2'>Number of active Cases of COVID-19</Typography>
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.recovered)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Recoveries</Typography>
                     <Typography varaint='h5'>
                     <CountUp 
                       start={0}
                      end= {recovered.value}
                      duration={3}
                      separator=','
                       />
                     </Typography>
                     <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography varaint='body2'>Number of recoveries from COVID-19</Typography>
                     </CardContent>
                 </Grid>
                 <Grid item component={Card} xs={12} md={3}className={cx(styles.card,styles.deaths)}>
                 <CardContent>
                     <Typography color="textSecondary" gutterBottom>Death</Typography>
                     <Typography varaint='h5'>
                     <CountUp 
                       start={0}
                      end= {deaths.value}
                      duration={3}
                      separator=','
                       />
                     </Typography>
                     <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                     <Typography varaint='body2'>Number of Deaths from COVID-19</Typography>
                     </CardContent>
                 </Grid>

              </Grid>
            </div>
    );
}
export default Cards;
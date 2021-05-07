import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        padding: theme.spacing(1),
        margin: '30px',
        maxWidth: 500,
        display: 'flex',
        height: '450px',
        overflow: 'hidden',
        textAlign: 'center',
        borderRadius: '20px',
        border: '10px red',
    },
    image: {
        width: 230,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const classes = useStyles();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '20px ', textAlign: 'center' }}>
            <div style={{ justifyContent: 'center', border: '10px red', borderRadius: '20px' }}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1} >
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <Typography style={{ backgroundColor: '#228B22', textAlign: 'center', borderRadius: '10px 10px 70px 70px ', width: '300px' }}>
                                    <Typography gutterBottom variant="subtitle1" style={{ fontSize: '30px', color: 'white' }}>Diamond</Typography>
                                    <Typography variant="body2" gutterBottom style={{ fontSize: '13px', color: 'white' }}>50k Ghoul</Typography>
                                    <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                                </Typography>
                            </ButtonBase><Typography gutterBottom variant="subtitle1" style={{ marginTop: '40px', color: '#666666', fontSize: '15px' }}>
                                <h3>
                                    Dex profit sharing<br />
                                Surprise airdrops<br />
                                Governance voting</h3>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                <Button onClick={() => alert('Button Clicked')} style={{
                                    height: '40px', width: '140px',
                                    backgroundColor: '#228B22', border: '30px',
                                    borderRadius: '13px', color: 'white', fontSize: '15px',
                                    cursor: 'pointer', marginTop: '125px', padding: '10px'
                                }}>stake now</Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
            <div>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <Typography style={{ backgroundColor: '#8c53c6', textAlign: 'center', borderRadius: '10px 10px 70px 70px ', width: '400px', position: 'initial' }}>
                                    <Typography gutterBottom variant="subtitle1" style={{ fontSize: '30px', color: 'white' }}>Platinum</Typography>
                                    <Typography variant="body2" gutterBottom style={{ fontSize: '13px', color: 'white' }}>50k+ Ghoul</Typography>
                                    <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                                </Typography>
                            </ButtonBase><Typography gutterBottom variant="subtitle1" style={{ marginTop: '30px', color: '#666666', fontSize: '15px' }}>
                                <h3>
                                    Dex profit sharing <br />
                                Governance voting<br />
                                Exclusive airdrops<br />
                                Exclusive early access to<br /> PRIFI dapps</h3>
                            </Typography>
                            <Typography variant="body2">
                                <Button onClick={() => alert('Button Clicked')} style={{
                                    height: '40px', width: '140px', backgroundColor: '#8c53c6',
                                    border: '30px', borderRadius: '13px', color: 'white',
                                    fontSize: '15px', cursor: 'pointer', marginTop: '75px', overflow: 'hidden', position: 'initial', padding: '10px'
                                }}>stake now</Button>
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper></div>
        </div>
    );
}

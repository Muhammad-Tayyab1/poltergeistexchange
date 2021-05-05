import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Button, CardContent } from '@material-ui/core';

export default function OutlinedCard() {


    return (
        <div className="cardView">
            {/* <div className='firstCard'>
                <Card style={{ textAlign: 'center', height: '400px', borderRadius: '10px' }}>

                    <Typography >
                        <div style={{ backgroundColor: '#00CED1', textAlign: 'center', margin: '15px', borderRadius: '10px 10px 70px 70px ' }}>
                            <div style={{ fontSize: '30px', color:'white' }}>Silver</div>
                            <div style={{ fontSize: '13px', color:'white' }}>min x ghoul</div>
                            <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                        </div>  </Typography>

                        <Typography>

                    <div style={{ marginTop: '40px' }}>
                        <h3>min 420 ghoul <br /> profit sharing</h3>
                    </div>
</Typography>
<Typography>
                    <div style={{ marginTop: '150px', }}>
                        <button onClick={()=>alert('Button Clicked')} style={{ height: '35px', width: '140px', backgroundColor: '#00CED1', border: '30px', borderRadius: '10px', color: 'white', fontSize:'20px', cursor:'pointer'   }}>stake now</button>
                    </div></Typography>
                </Card> </div> */}
            
                <Card className='firstCard'>
                    <CardContent style={{ margin: 0, textAlign: 'center',width:'100%', height: '365px', borderRadius: '40px' }}>
                        <Typography variant="body2" component="p" >
                            <div style={{ backgroundColor: '#228B22', textAlign: 'center', borderRadius: '10px 10px 70px 70px ' }}>
                                <div style={{ fontSize: '30px', color: 'white' }}>Diamond</div>
                                <div style={{ fontSize: '13px', color: 'white' }}>min x ghoul</div>
                                <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                            </div>  </Typography>

                        <Typography variant="body2" component="p" style={{fontSize: '18px', marginTop: '40px', color: '#666666' }}>
                            
                                min 10420 ghoul <br />Silver+<br /> Surprise airdrops
                            
                        </Typography>
                        <Typography variant="body2" component="p">
                            <div style={{ marginTop: '125px', }}>
                                <button onClick={() => alert('Button Clicked')} style={{ height: '35px', width: '140px', backgroundColor: '#228B22', border: '30px', borderRadius: '10px', color: 'white', fontSize: '20px', cursor: 'pointer' }}>stake now</button>
                            </div></Typography>
                    </CardContent>
                </Card> 

            
                <Card className='firstCard'>
                    <CardContent style={{ textAlign: 'center',width:'100%', height: '365px', borderRadius: '10px' }}>

                        <Typography variant="body2">
                            <div style={{ backgroundColor: '#8c53c6', textAlign: 'center', borderRadius: '10px 10px 70px 70px ' }}>
                                <div style={{ fontSize: '30px', color: 'white' }}>Platinum</div>
                                <div style={{ fontSize: '13px', color: 'white' }}>min x ghoul</div>
                                <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                            </div>  </Typography>
                        <Typography variant="body2" component="p" style={{marginTop: '33px' ,fontSize: '18px', color: '#666666' }}>

                            min 36420 ghoul <br />Diamond +<br /> Exclusive private deals <br /> Exclusive early access to<br />prifi dapps VIP gov voting
                           
                        </Typography>
                        <Typography style={{ marginTop: '80px', }}>
                            
                                <button onClick={() => alert('Button Clicked')} style={{ height: '35px', width: '140px', backgroundColor: '#8c53c6', border: '30px', borderRadius: '10px', color: 'white', fontSize: '20px', cursor: 'pointer' }}>stake now</button>
                            </Typography>
                    </CardContent> </Card> 

        </div>
    );
}

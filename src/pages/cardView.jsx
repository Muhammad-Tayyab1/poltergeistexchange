import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

export default function OutlinedCard() {


    return (
        <div className="cardView">
            <div className='firstCard'>
                <Card style={{ textAlign: 'center', height: '400px', borderRadius: '10px' }}>

                    <Typography >
                        <div style={{ backgroundColor: '#00CED1', textAlign: 'center', margin: '15px', borderRadius: '10px 10px 70px 70px ' }}>
                            <div style={{ fontSize: '30px', color:'white' }}>Silver</div>
                            <div style={{ fontSize: '13px', color:'white' }}>min x ghoul</div>
                            <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                        </div>  </Typography>

                    <div style={{ marginTop: '40px', color: '#666666' }}>
                        <h3>min 420 ghoul <br /> profit sharing</h3>
                    </div>

                    <div style={{ marginTop: '150px', }}>
                        <button onClick={()=>alert('Button Clicked')} style={{ height: '35px', width: '140px', backgroundColor: '#00CED1', border: '30px', borderRadius: '10px', color: 'white', fontSize:'20px', cursor:'pointer'   }}>stake now</button>
                    </div>
                </Card> </div>
            <div className='firstCard'>
                <Card style={{ margin: 0, textAlign: 'center', height: '400px', borderRadius: '10px' }}>

                    <Typography >
                        <div style={{ backgroundColor: '#228B22', textAlign: 'center', margin: '15px', borderRadius: '10px 10px 70px 70px ' }}>
                            <div style={{ fontSize: '30px',color:'white' }}>Diamond</div>
                            <div style={{ fontSize: '13px',color:'white' }}>min x ghoul</div>
                            <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                        </div>  </Typography>

                    <div style={{ marginTop: '40px', color: '#666666' }}>
                        <h3>min 10420 ghoul <br />Silver+<br /> Surprise airdrops</h3>
                    </div>

                    <div style={{ marginTop: '130px', }}>
                        <button onClick={()=>alert('Button Clicked')} style={{ height: '35px', width: '140px', backgroundColor: '#228B22', border: '30px', borderRadius: '10px',  color: 'white', fontSize:'20px', cursor:'pointer'  }}>stake now</button>
                    </div>
                </Card> </div>

            <div className='firstCard'>
                <Card style={{ margin: 0, textAlign: 'center', height: '400px', borderRadius: '10px' }}>

                    <Typography >
                        <div style={{ backgroundColor: '#8c53c6', textAlign: 'center', margin: '15px', borderRadius: '10px 10px 70px 70px ' }}>
                            <div style={{ fontSize: '30px',color:'white' }}>Platinum</div>
                            <div style={{ fontSize: '13px',color:'white' }}>min x ghoul</div>
                            <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="35" />
                        </div>  </Typography>

                    <div style={{ marginTop: '40px', color: '#666666' }}>
                        <h3 >min 36420 ghoul <br />Diamond +<br /> Exclusive private deals <br /> Exclusive early access to<br />prifi dapps VIP gov voting</h3>
                    </div>

                    <div style={{ marginTop: '85px', }}>
                        <button onClick={()=>alert('Button Clicked')} style={{ height: '35px', width: '140px', backgroundColor: '#8c53c6', border: '30px', borderRadius: '10px', color: 'white', fontSize:'20px', cursor:'pointer'  }}>stake now</button>
                    </div>
                </Card> </div>

        </div>
    );
}

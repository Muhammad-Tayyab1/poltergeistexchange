import React from "react"
import OutlinedCard from "./cardView"

export default function Home() {
  return <div>
    <div className="header">
    <h1 className="headertxt"><hr style={{color:'white', width:'30%'}}></hr>Poltergeist Soft staking plans <hr style={{color:'white', width:'30%'}}></hr></h1>
    </div>
    <OutlinedCard/>

    <div style={{ color:'white', textAlign:'end'}}>
    <div style={{textTransform: 'uppercase', color:'white', fontSize:'18px'}}>
      <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="25" style={{marginRight:'8px'}} />Poltergeist Exchange</div>
    </div>
  </div>
}

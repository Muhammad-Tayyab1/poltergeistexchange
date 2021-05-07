import React from "react"
import Footer from "./Footer"
import SpacingGrid from "./gridView"
import Header from "./Header"

export default function Home() {
  return <div>
   <div>
     <Header/>
   </div>
    <div className="header">
      <h1 className="headertxt"><hr style={{ color: 'white', maxWidth: '430px' }}></hr>Poltergeist Soft staking plans <hr style={{ color: 'white', maxWidth: '430px' }}></hr></h1>
    </div>
    <SpacingGrid />
    <div style={{ color: 'white', textAlign: 'end', marginRight: '20px',position:'relative' }}>
      <div style={{ textTransform: 'uppercase', color: 'white', fontSize: '18px' }}>
        <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="25" style={{ marginRight: '8px',  }} />Poltergeist Exchange</div>
    </div>
    <div>
      <Footer/>
    </div>
  </div>
}

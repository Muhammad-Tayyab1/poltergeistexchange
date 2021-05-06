import React from "react"
import SpacingGrid from "./gridView"

export default function Home() {
  return <div className="container">
    <div className="header">
      <h1 className="headertxt"><hr style={{ color: 'white', maxWidth: '390px' }}></hr>Poltergeist Soft staking plans <hr style={{ color: 'white', maxWidth: '390px' }}></hr></h1>
    </div>
    <SpacingGrid />
    <div style={{ color: 'white', textAlign: 'end', marginRight: '20px' }}>
      <div style={{ textTransform: 'uppercase', color: 'white', fontSize: '18px' }}>
        <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height="25" style={{ marginRight: '8px' }} />Poltergeist Exchange</div>
    </div>
  </div>
}

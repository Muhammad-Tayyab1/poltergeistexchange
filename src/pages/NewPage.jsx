import React from 'react'

export default function NewPage() {
    return (
        <div>
            <div className="container group">
                <div style={{ display: 'flex' }}>
                    <div className="pre-grid"><h1>Ghoul Staking Plans</h1><p>Stake your Ghoul on Poltergeist Exchange to earn profit sharing and other upcoming benefits.<br /><br /><a href className="btn-buy">Buy GHOUL</a><br /></p></div>

                    <div className="grid-1-3" style={{ marginLeft: '10px' }}>
                        <img className="goul-icon-a" src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height={50} />
                        <h2>Diamond</h2>
                        <h3><sup>Under </sup>50,000 GHOUL</h3>
                        <hr /><br />
                        <ul>
                            <li>Poltergeist Profit Sharing</li>
                            <li>Surprise Airdrops</li>
                            <li>Governance Voting</li>
                        </ul>
                        <a href className="button">Stake Now</a>
                    </div>
                    <div className="grid-1-3" style={{ marginLeft: '10px' }}>
                        <img className="goul-icon-b" src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height={50} />
                        <h2>Platinum</h2>
                        <h3><sup>Over </sup>50,000 GHOUL</h3>
                        <hr /><br />
                        <ul>
                            <li>Poltergeist Profit Sharing</li>
                            <li>Exclusive Airdrops</li>
                            <li>Governance Voting</li>
                            <li>Early access to PRIFI Dapps</li>
                        </ul>
                        <a href className="button">Stake Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React from 'react'

export default function Footer() {
    return (
        <div style={{ backgroundColor: '#232323', color: 'white', height:'400px'}}>

            <hr style={{ color: '#808080', border: '1px solid #666666', width: '99%' }} />
            <div style={{ display: 'flex', marginTop: '80px', backgroundColor: '#232323' }}>

                <div style={{ marginLeft: '80px' }}>
                    <ul style={{ textDecoration: 'none', listStyle: 'none', color: '#808080' }}>
                        <li><span>Links</span></li>
                        <li style={{ marginTop: '20px' }}>
                            <a style={{ color: '#cccccc', textDecoration: 'none' }} href="/trading">Exchange</a>
                        </li>
                        <li style={{ marginTop: '15px' }}>
                            <a style={{ color: '#cccccc', textDecoration: 'none' }} href="/markets">Markets</a>
                        </li>
                    </ul>
                </div>
                <div style={{ marginLeft: '80px' }}>
                    <ul style={{ textDecoration: 'none', listStyle: 'none', color: '#808080' }}>
                        <li><span>Help</span>
                        </li>
                        <li style={{ marginTop: '20px' }}>
                            <a style={{ color: '#cccccc', textDecoration: 'none' }} href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li style={{ marginTop: '15px' }}><a style={{ color: '#cccccc', textDecoration: 'none' }} href="/terms">Terms Of Use</a>
                        </li>
                        <li style={{ marginTop: '15px' }}>
                            <a style={{ color: '#cccccc', textDecoration: 'none' }} href="/support">Submit a ticket</a>
                        </li>
                        <li style={{ marginTop: '15px' }}>
                            <a style={{ color: '#cccccc', textDecoration: 'none' }} href="/sendusanemail">Send us an email</a>
                        </li>
                    </ul>
                </div>
                <div style={{ marginLeft: '80px' }}>
                    <ul style={{ textDecoration: 'none', listStyle: 'none', color: '#808080' }}>
                        <li style={{ marginTop: '20px' }}>
                            <span >Connect</span></li>
                        <li style={{ marginTop: '15px' }}>
                            <a style={{ color: '#cccccc', textDecoration: 'none' }} href="https://twitter.com/PoltergeistDEX">Twitter</a>
                        </li>
                        <li style={{ marginTop: '15px' }}>
                            <a style={{ color: '#cccccc', textDecoration: 'none' }} href="https://t.me/poltergeistexchange">Telegram</a>
                        </li></ul>
                </div>
            </div>
            <div>
                <hr style={{ border: '0.5px solid #666666', width: '90%', marginTop: '40px' }} />
                <div style={{ marginLeft: '100px', marginTop: '40px', }}><h4>© 2021 Poltergeist Exchange. All rights reserved</h4>
                </div></div>
        </div>


    )
}

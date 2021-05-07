import React from 'react'

export default function Header() {
    return (
        <div style={{ alignContent: 'center', display: 'flex', backgroundColor: '#232323', justifyContent: 'space-between', textDecoration: 'none',fontFamily:'var(--font-family)!important' }}>

            <div style={{ display: 'flex', }}>
                <a href="/home">
                    <div style={{ marginTop: '15px', marginLeft: '15px' }}>
                        <img src="https://poltergeistexchange.com/static/media/logo.c4de8924.svg" alt="Poltergeist Exchange" height={50} />
                    </div></a>
                <div style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '32px', marginLeft: '20px', fontSize: '17px' }}>

                    <div >
                        <a style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }} href="/">
                            <span>Home</span></a></div>
                    <div >

                        <a style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }} href="/trading/ghouldai">
                            <span>Exchange</span></a>
                    </div>
                    <div>

                        <a style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }} href="/telegramchannel">
                            <span>Telegram</span></a></div>
                </div>
            </div>
            <div style={{ display: 'inline-flex', marginRight: '10px', textDecoration: 'none', color: 'white', marginTop: '32px', fontSize: '17px', marginLeft: '22px',fontFamily:'var(--font-family)!important'  }}>
                <a style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }} href="/signup">
                    <span>Register</span></a>
                <a style={{ marginRight: '20px', color: 'white', textDecoration: 'none' }} href="/signin"><span>Login</span>
                </a><div className="pg-navbar__header-settings">
                    <div className="btn-group pg-navbar__header-settings__account-dropdown dropdown-toggle dropdown-menu-language-container">
                        <div className="dropdown-menu-language-field">English<span className="icon">

                            <svg width={10} height={6} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.655151 1.34485L4.99998 5.34485L9.34481 1.34485" stroke="#657395" /></svg></span>
                        </div></div></div></div>
        </div>

    )
}
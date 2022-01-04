import React from 'react';
import './Home.css'

function Home() {
    return (
        <div className='home_bg'>
        <div className='home'>
            <div className="home__left">
                <h2 className='home__title'>The world is made of <span className='btswaps'>BTswaps.</span></h2>
                <p className='desc'>Trade, earn and win crypto on the most popular decentralized platform in the galaxy</p>
                <div className="button-group">
                    <button className='connect'>CONNECT WALLET</button>
                    <button className='trade'>Trade Now</button>
                </div>
            </div>
            <div className="home__right">
                <img className='bitcoins' src='BTC.png'></img>
                
            </div>
            
        </div>
        <img className='home__background' src='Mountains.svg'></img>
        </div>
    )
}

export default Home

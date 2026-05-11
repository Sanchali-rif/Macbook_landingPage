import React from 'react'

const Showcase = () => {
  return (
    <section id="showcase">
        <video src="/videos/game.mp4" loop muted playsInline/>
        <div className="mask">
            <img src="/mask-logo.svg"/>
        </div>
        <div className='content'>
            <div className='wrapper'>
                <div className='lg:max-w-md'>
                    <h2>Rocket Chip</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Showcase
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src='/logo.svg' alt='Apple logo'/>
            <ul>
                {[
                    {label:'store' },
                    {label:'Mac' },
                    {label:'Iphone' },
                    {label:'Watch' },
                    {label:'Vision' },
                    {label:'AirPods' },
                ].map((link)=>(
                    <li key={link.label}>
                        <a href={link.label}>{link.label}</a>
                    </li>  
                ))}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar

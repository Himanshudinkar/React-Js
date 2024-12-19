import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Layout = () =>{

    return(
        <>
        <header className='head'>
            <h1>Logo</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About</Link></li>
                    <li><Link to="/contect">Contect</Link></li>
                </ul>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <div className='foot'>

                <div className='f'>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Contect</h5>
                    <h5>Booking</h5>
                    <h5>Available</h5>
                </div>

                  <div className='f'>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Contect</h5>
                    <h5>Booking</h5>
                    <h5>Available</h5>
                </div>

                  <div className='f'>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Contect</h5>
                    <h5>Booking</h5>
                    <h5>Available</h5>
                </div>

                  <div className='f'>
                    <h5>Home</h5>
                    <h5>About</h5>
                    <h5>Contect</h5>
                    <h5>Booking</h5>
                    <h5>Available</h5>
                </div>

            </div>
        </footer>
        
        </>
    )
}

export default Layout
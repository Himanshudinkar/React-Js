import myimg from './assets/logo(1).png'
import cart from './assets/cart.png'
import heart from './assets/heart.png'
import search from './assets/search.png'

const Header = ()=> {

    return(
        <>
        <div className="header">

            <img src={myimg} alt="" />

            <div className="nav">
                <nav>
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Page</a></li>
                        <li><a href="">Blogs</a></li>
                        <li><a href="">Contacts</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </nav>
            </div>

            <div className="icone">
                <img src={search} alt="" />
                <img src={heart} alt="" />
                <img src={cart} alt="" />
            </div>
        </div>
        </>
    )
}

export default Header
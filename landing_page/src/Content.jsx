import banner1 from './assets/banner-1.jpg'
import banner2 from './assets/banner-2.jpg'

const Content = () => {
    return(
        <>
       <div className="content">
        <div className="text">
            <h1>Clothing</h1>
            <h1>Collection 2024</h1>
            <button>SHOP NOW</button>
        </div>
        <img src={banner1} alt="" />
       </div>

        <div className="content1">
            <img src={banner2} alt="" />
        <div className="text1">
            <h1>Clothing</h1>
            <h1>Collection 2024</h1>
            <button>SHOP NOW</button>
        </div>
       </div>
        </>
    )
}

export default Content
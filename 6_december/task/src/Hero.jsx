//public folder ke ander image ho to use direct apply kar sakte he uska nam deke use import karne ki need nahi he
//public me static images rakhte he or  assests me dynamic 

import myimg from './assets/order.png'


let Hero = () =>{
    

    return(
        <>

        <div className='Column1'>
            <div className='Head1'>
       <h1>Admim Dashboard</h1>
       <p>Lorem ipsum dolor sit amet consectetur,
        <br />
         adipisicing elit. Facere itaque praesentium
        <br />
        architecto dicta perspiciatis suscipit libero
        <br />
        iure laborum nobis dolore cumque minima quas nulla
        <br />
        illo molestias, nostrum animi voluptatum quia?
        </p>
         <button>Click</button>
         </div>
         <img src="cat.webp" alt="" />
         </div>
        </>
    )
}

export default Hero
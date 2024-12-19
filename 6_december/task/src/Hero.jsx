//public folder ke ander image ho to use direct apply kar sakte he uska nam deke use import karne ki need nahi he
//public me static images rakhte he or  assests me dynamic 

import myimg from './assets/order.png'


let Hero = () =>{

     function pt(){
        let a = document.querySelector('#photo');
        a.style.height = "200px";
        a.style.width = "200px";
    }

    function lt(){
        let a = document.querySelector('#photo');
        a.style.height = "500px";
        a.style.width = "500px";
    }
    

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
         <button onClick={()=>alert("inline event")} >Click</button>
         </div>
         <img onMouseEnter={pt} onMouseLeave={lt} src="cat.webp" alt="" id='photo' />
         </div>
        </>
    )
}

export default Hero
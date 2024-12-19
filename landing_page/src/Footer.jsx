import myimg1 from './assets/logo(1).png'
const Footer = () =>{
    return (

        <>

        <footer className="foot">

      <div className="f">
        <h1>Useful Links</h1>
        <p>Delivery Information</p>
        <p>International Shipping</p>
        <p>Payment Options</p>
        <p>Track your Order</p>
        <p>Returns</p>
        <p>Find a Clinic</p>
      </div>

      <div className="f">
        <h1>Information</h1>
        <p>Careers</p>
        <p>Blog</p>
        <p>Offers & Contest Details</p>
        <p>Help & FAQs</p>
        <p>About Male Fasion</p>
        <p>Track your Order</p>
      </div>

        <div className="f">
        <h1>Contact Us</h1>
        <p>Write to Us</p>
        <p>1800-266-0123</p>
        <p>Chat with Us</p>
        <p>Payment Options</p>
        <p>Track your Order</p>
        <p>About Male Fasion</p>
      </div>

      <div className="f">
       <img src={myimg1} alt="" />
      </div>

    </footer>
    
    <div class="last">
      <p>© 2024 Male Fasion. All Rights Reserved. by Himanshu dinkar</p>
      </div>

        </>
    )
}

export default Footer
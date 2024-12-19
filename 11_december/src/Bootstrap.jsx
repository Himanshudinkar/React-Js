const Boot = () => {
    return(
        <>
        <div className="Container">
        <div className="row ">
         <div className="col-lg-6 col-md-8 col-12 bg-primary">
             <h1>Himanshu</h1>
             <h2>Dinkar</h2>
             <h3>Siddharth</h3>
             <h4>pradeep</h4>
             <h3>Kumar</h3>
         </div>
          <div className="col-lg-6 col-md-4 col-12 bg-success">
             <h1>Himanshu</h1>
             <h2>Dinkar</h2>
             <h3>Siddharth</h3>
             <h4>pradeep</h4>
             <h3>Kumar</h3>
         </div>
        </div>
        </div>


        <div className="card" style= {{width: "18rem"}}>
                <img src="MainAfter.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        </>
    )
}

export default Boot
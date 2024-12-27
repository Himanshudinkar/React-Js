const Map = () =>{

    let ar = ["Dhruv",67,"Bhopal"]

    let arob = [
        {
            Name:'Himanshu',
            age:23,
            city:'Bhopal'
        },
         {
            Name:'vikas ',
            age:23,
            city:'Bhopal'
        },
         {
            Name:'sudhansh',
            age:23,
            city:'Bhopal'
        }
    ]

     let arrayobject = arob.map((e, index) => (
        <tr key={index}>
            <td>{e.Name}</td>
            <td>{e.age}</td>
            <td>{e.city}</td>
        </tr>
    ));

    let arf =  ar.map((e,index) => {return <li key={index}> {e} </li>})

    return(
        <>

        {ar.map((e,index) => {return <h1 key={index}> {e} </h1>})}

        <ul>
            <li>{arf}</li>
        </ul>

        <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                </tr>
            </thead>

            <tbody>
            
                {arrayobject}

            </tbody>
        </table>

        </>
    )
}

export default Map
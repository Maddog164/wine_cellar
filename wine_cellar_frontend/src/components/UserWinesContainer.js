
// import {Link} from 'react-router-dom'
// import {Card} from 'react-bootstrap'
import WineCard from './WineCard'



const UserWinesContainer = (props) => {
    
    console.log("I am in UserWinesContainer");
    
    console.log(props.location.state)
    const user = props.location.state

    
    console.log(user.wines)
    
        
        return(
            <div>
                {/* <h1 style={{textAlign: "center"}}> Owner <b>{user.first_name} {user.last_name}<h1/> */}
                <p className="h1"> Owner <b>{user.first_name} {user.last_name}</b></p>
                <p className="h2">Wine List:</p>
                <hr/>
                <div className="clem">
                    {user.wines && user.wines.map(wine => (
                        // <p key={wine.id}>
                        // <Card key={wine.id} className="box">
                        //     {/* <img
                        //     src = {wine.image_url}
                        //     alt = "new"
                        //      /> */}
                        //     <Card.Img variant="top" src = {wine.image_url} alt = "new" className="Wine-img" />
                        //     {/* <Link to={{pathname: `/wines/${wine.id}`, state: {wines: wine.id}}} > {wine.name} </Link>      
                        //     {wine.color} {wine.grape} {wine.country} {wine.avg_price} */}
                        //     <Card.Body>
                        //         <Card.Title>{wine.name}</Card.Title>
                        //         <Card.Subtitle>Color: {wine.color}</Card.Subtitle>
                        //         <Card.Subtitle>Grape: {wine.grape}</Card.Subtitle>
                        //         <Card.Subtitle>Country: {wine.country}</Card.Subtitle>
                        //         <Card.Subtitle>Avg Price: ${wine.avg_price}</Card.Subtitle>
                        //     </Card.Body>
                        // </Card> 
                        <WineCard
                            wine = {wine} key={wine.id} className="box">
                        </WineCard>

                    ))}
                </div>
            )
                
            </div>
        )
    
}


export default UserWinesContainer

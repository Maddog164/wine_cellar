import WineCard from './WineCard'



const UserWinesContainer = (props) => {
    
        
    console.log(props.location.state)
    const user = props.location.state

    
    console.log(user.wines)
    
        
        return(
            <div>
                <p className="h1"> Owner <b>{user.first_name} {user.last_name}</b></p>
                <p className="h2">Wine List:</p>
                <hr/>
                <div className="clem">
                    {user.wines && user.wines.map(wine => (
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

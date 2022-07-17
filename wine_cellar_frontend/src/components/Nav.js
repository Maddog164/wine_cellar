import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

class Navigate extends Component {
    render() {
        return(
            <Navbar bg="dark" varant="dark">
                <div className="Nav_container">
                    <Link to="/" className="Nav_brand">
                        <img src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2019/10/Cellar-920x609.gif" alt="new" className="Wine-img" />
                    </Link>

                    <div className="Nav-right" >
                        <ul className="justify-contnet-end" style={{width: "100%"}} >
                            <li className="Nav_item">
                                <Link className="Nav_link" to="/Home">Home</Link>
                            </li>
                            <li className="Nav_item">
                                <Link className="Nav_link" to="/About">About</Link>
                            </li>
                            <li className="Nav_item">
                                <Link className="Nav_link" to="/users">Owners</Link>
                            </li>
                            <li className="Nav_item">
                                <Link className="Nav_link" to="/wines">Wines</Link>
                            </li>
                            <li className="Nav_item">
                                <Link className="Nav_link" to="/Search">Search</Link>
                            </li>
                        </ul>
                    </div>
                
                
                    
                </div>
            </Navbar>
        )
    }
}

export default Navigate

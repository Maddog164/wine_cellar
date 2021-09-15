import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {getAllWines} from '../actions/wineActions'
// import {Card} from 'react-bootstrap'
// import { Container, Row, Col } from 'react-bootstrap'
import WineCard from './WineCard'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { Container, Row, Col} from 'react-bootstrap'

class WineContainer extends Component {

    componentDidMount() {
        this.props.getAllWines()
    }

    render() {
        return(
            <div className="container">
            Current Wine List:
                {/* <div className="container"> */}
                    <div className="clem"> 
                        {this.props.wines && this.props.wines.map((wine, i) => (                        
                    
                        <div className="col-md-4" key={i}>
                            <WineCard
                                wine = {wine} key={wine.id} className="box">
                            </WineCard>
                        </div>
                       
                                            
                        ))}
                    </div>
                {/* </div> */}

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {wines: state.wineReducer.wines}
}

const mapDispatchToProps = dispatch => {
    return {
        getAllWines: () => dispatch(getAllWines())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WineContainer)
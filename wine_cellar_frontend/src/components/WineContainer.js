import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {getAllWines} from '../actions/wineActions'
import {Card} from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { Container, Row, Col} from 'react-bootstrap'

class WineContainer extends Component {

    componentDidMount() {
        this.props.getAllWines()
    }

    render() {
        return(
            // <div>
            <Container>
                Current Wine List:
                    <Row>
                        {this.props.wines && this.props.wines.map(wine => (
                        // <div class="row">
                        //     <div class="col">
                        
                            <Col sm={true} className="mb-5" key={wine.id}>
                                <Card className="h-100 w-100 shadow-sm bg-white rounded" style={{flex: 1}}>
                                    <Card.Img variant="top" src = {wine.image_url} alt="new" className="Wine-img" />
                                        <Card.Body className="d-flex flex-column">
                                        <div className="d-flex mb-2 justify-content-between">
                                            <Card.Title className="mb-0 font-weight-bold">{wine.name}</Card.Title>
                                            <Card.Subtitle>Color: {wine.color}</Card.Subtitle>
                                            <Card.Subtitle>Grape: {wine.grape}</Card.Subtitle>
                                            <Card.Subtitle>Country: {wine.country}</Card.Subtitle>
                                            <Card.Subtitle>Avg Price: ${wine.avg_price}</Card.Subtitle>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        
                        
                        ))}
                    </Row>
            </Container>
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
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllWines} from '../actions/wineActions'
import WineCard from './WineCard'

class WineContainer extends Component {

    componentDidMount() {
        this.props.getAllWines()
    }

    render() {
        const tempArray = this.props.wines || []
        const splitArray = breakIntoArrayOfArrays(tempArray, 3)
        return(
            <div className="container">
            <p className="h1"><b>Current Wine List:</b></p>
            <hr/>
                <div className="clem">
                    {splitArray.map((wines, i) => (
                        <div className="row" key={i}>
                            {wines.map((wine, ii) => (
                                <div className="col-xs-3" key={ii}>
                                    <WineCard
                                        wine = {wine} key={wine.id} className="box">
                                    </WineCard>
                                </div>
                            ))}
                        </div>
                    ))}
                    {console.log(splitArray)}
                </div>
            

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

const breakIntoArrayOfArrays = (array, chunk = 3) => {
    var result = []
    var i = 0
    for(i=0; i<array.length; i+=chunk)
        { result.push(array.slice(i,i+chunk))}
    return result
}

export default connect(mapStateToProps, mapDispatchToProps)(WineContainer)
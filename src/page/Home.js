import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home : Welcome Poom Warawat</h1>
                <h2>Your age : {this.props.age}</h2>
                <button onClick={this.props.handleDown}>Down</button>
                <button onClick={this.props.handleUp}>Up</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        age : state.Cal
    }
}

function mapDispatchToProps(dispatch){
    return{
        handleDown : () =>{
            dispatch({ type : "DOWNAGE"})
        },
        handleUp : () =>{
            dispatch({ type : "UPAGE"})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

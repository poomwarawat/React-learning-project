import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserList from '../components/users/UserList'
import { loadUsers } from '../action'

class Users extends Component {
    componentDidMount(){
        this.props.dispatch(loadUsers())
    }
    render() {
        const dataUser = this.props.Users
        let list = <div>Loading...</div>
        if (dataUser && dataUser.length > 0) {
            return(
                list = <UserList data = {dataUser}></UserList>
            )
        }
        return (
            <div>
                <h1>Hello Users.js</h1>
                {list}
            </div>
        )
    }
}

function mapStatetoProps(state){
    return{
        Users : state.Users
    }
}


export default connect(mapStatetoProps)(Users)

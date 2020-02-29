import React, { Component } from 'react'

export default class User extends Component {
    render() {
        const { id, data } = this.props
        return (
            <div key={id}>
                <p>Name : {data.name}</p>
                <p>Username : {data.username}</p>
            </div>
        )
    }
}

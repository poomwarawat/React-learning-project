import React, { Component } from 'react'
import User from './User'

export default class UserList extends Component {
    render() {
        const data = this.props.data
        return (
            <div>
                {
                    data.map((datas) =>{
                        return(
                            <User id={datas.id} data={datas}></User>
                        )
                    })
                }
            </div>
        )
    }
}

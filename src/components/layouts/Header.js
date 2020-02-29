import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <ul>
                    <li>
                        <Link to="/">main</Link>
                    </li>
                    <li>
                        <Link to="/photo">photo</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

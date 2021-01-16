import React, { Component } from 'react'
import style from './home.module.css'
export default class Home extends Component {
    render() {
        return (
            <div className={`${style.home} d-flex justify-content-center align-items-center`}>
                <div className="text-center">
                    <h1 className="mb-2">Store App</h1>
                    <p>Shopping Time</p>
                </div>
            </div>
        )
    }
}

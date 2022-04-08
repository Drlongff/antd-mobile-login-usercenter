import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import routes from './config/routes'
import { Routes, Route } from 'react-router-dom'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <Routes>
                    {
                        routes.map((routeObj)=>{
                            return <Route key={routeObj.path} {...routeObj}/>
                        })
                    }
                </Routes>
            </div>
        )
    }
}

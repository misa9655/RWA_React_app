import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigacija from './navigacija'
import Header from './header'
import Opcije from './opcije'

class App extends Component {
    
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigacija />
                    <Route exact path='/' component={Header}></Route>
                    <Opcije />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
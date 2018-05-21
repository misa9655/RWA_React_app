import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './navbar'
import Footer from './footer'
import Home from './home'
import Kategorije from './kategorije'


class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/category' component={Kategorije}></Route>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
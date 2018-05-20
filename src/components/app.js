import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navigacija from './navigacija'
import Footer from './footer'
import Posts from './posts/posts'
import Kategorije from './kategorije/kategorije'
import Korisnici from './korisnici/korisnici'
import KontrolnaTabla from './kontrolna-tabla/kontrolna-tabla'

class App extends Component {
    
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigacija />
                    <Route exact path='/' component={KontrolnaTabla}></Route>
                    <Route exact path='/posts' component={Posts}></Route>
                    <Route exact path='/category' component={Kategorije}></Route>
                    <Route exact path='/users' component={Korisnici}></Route>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
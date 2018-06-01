import React from 'react'
import { Route } from 'react-router-dom'

import Navbar from './navbar'
import Footer from './footer'
import Home from './home'
import EditPost from './edit-post'
import Kategorije from './kategorije'
import Postovi from './postovi'
import KontrolnaTabla from './kontrolna-tabla'


const App = () => {
    return (
            <div>
                <Navbar />
                <Route exact path='/' component={Home}></Route>
                <Route path='/panel' component={KontrolnaTabla} ></Route>
                <Route path='/editPost/:id' component={EditPost} ></Route>
                <Route path='/category' component={Kategorije}></Route>
                <Route path='/posts' component={Postovi}></Route>
                <Footer />
            </div>
    )
}


export default App;
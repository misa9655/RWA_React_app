import React, { Component } from 'react'
import { Route } from 'react-router-dom'



import Navbar from './navbar'
import Footer from './footer'
import Home from './home'
// import Kategorije from './kategorije'
// import Postovi from './postovi'
// import Korisnici from './korisnici'
import KontrolnaTabla from './kontrolna-tabla'


class App extends Component {
    
    render() {
        return (
            
                <div>
                    <Navbar />
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/panel' component={KontrolnaTabla} ></Route>
                    {/* <Route exact path='/category' component={Kategorije}></Route> */}
                    {/* <Route exact path='/posts' component={Postovi}></Route> */}
                    {/* <Route exact path='/users' component={Korisnici}></Route> */}
                    <Footer />
                </div>
        )
    }
}

export default App;
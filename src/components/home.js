import React, { Component } from 'react'

import Header from './header'
import LogIn from './log-in'

class Home extends Component {
    render() {
        
        return (
            <div>
               <Header color='bg-primary' icon='fa fa-user' text='Blog tool' />
               <LogIn />
            </div>
        )
    }
}

export default Home;

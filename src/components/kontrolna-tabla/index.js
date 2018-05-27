import React, { Component } from 'react'

import Header from '../header'
import Opcije from './opcije'


class KontrolnaTabla extends Component {
    render() {
        return (
            <div>
                <Header color='bg-primary' text='Kontrolna tabla' icon='fa fa-cog' />
                <Opcije />
                
            </div>
        )
    }
}

export default KontrolnaTabla;
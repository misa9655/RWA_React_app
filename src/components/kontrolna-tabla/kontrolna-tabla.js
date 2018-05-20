import React, { Component } from 'react'

import Opcije from './opcije'
import ListaPostova from './posts-table'
import Header from './header'

class KontrolnaTabla extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Header />
                <Opcije />
                <ListaPostova />
            </div>
        )
    }
}

export default KontrolnaTabla;
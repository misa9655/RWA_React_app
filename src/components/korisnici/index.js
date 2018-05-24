import React, { Component } from 'react'

import Header from '../header'
import Search from '../search'
import ListaKorisnika from './lista-korisnika'

class Korisnici extends Component {
    render() {
        return (
            <div>
                <Header color='bg-warning' text='Korisnici' icon='fas fa-pencil-alt' />
                <Search color='btn-warning' />
                <ListaKorisnika />
            </div>
        )
    }
}

export default Korisnici
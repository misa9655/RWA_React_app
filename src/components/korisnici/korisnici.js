import React, { Component } from 'react'

import Search from './search'
import Header from './header'
import ListaKorisnika from './list-of-users';

class Korisnici extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <ListaKorisnika />
            </div>
        )
    }
}

export default Korisnici;
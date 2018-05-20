import React, { Component } from 'react'

import Search from './search'
import ListaKategorija from './list-of-category'
import Header from './header'

class Kategorije extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <ListaKategorija />
            </div>
        )
    }
}

export default Kategorije;
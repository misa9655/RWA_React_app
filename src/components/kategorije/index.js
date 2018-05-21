import React, { Component } from 'react'

import Header from '../header'
import Search from '../search'
import ListaKategorija from './lista-kategorija'

class Kategorije extends Component {
    render() {
        return (
            <div>
                <Header color='bg-success' text='Kategorije' icon='fas fa-pencil-alt' />
                <Search color='btn-success' />
                <ListaKategorija />
            </div>
        )
    }
}

export default Kategorije
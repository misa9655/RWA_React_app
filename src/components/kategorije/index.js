import React from 'react'

import Header from '../header'
import Search from '../search'
import ListaKategorija from './lista-kategorija'

const Kategorije = () => {
    return (
        <div>
            <Header color='bg-success' text='Kategorije' icon='fa fa-folder' />
            <Search color='btn-success' />
            <ListaKategorija />
        </div>
    )
}

export default Kategorije
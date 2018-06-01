import React from 'react'

import Header from '../header'
import Search from '../search'
import ListaPostova from './lista-postova'

const Postovi = () => {
    
    return (
        <div>
            <Header color='bg-primary' text='Postovi' icon='fas fa-pencil-alt' />
            <Search color='btn-primary' />
            <ListaPostova />
        </div>
    )

}

export default Postovi
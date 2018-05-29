import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../header'
import Opcije from './opcije'
import ListaPostova from './lista-postova'
import DodajPost from './forms/dodajPost'
import DodajKategoriju from './forms/dodajKategoriju'
import DodajKorisnika from './forms/dodajKorisnika'

class KontrolnaTabla extends Component {

    render() {
        return (
            <div>
                
                        <Header color='bg-primary' text='Kontrolna tabla' icon='fa fa-cog' />
                        <Opcije />
                        <Route exact path='/panel' component={ListaPostova}></Route>
                        <Route exact path='/new' component={DodajPost}></Route>
                        <Route exact path='/newCategory' component={DodajKategoriju}></Route>
                        <Route exact path='/newUser' component={DodajKorisnika}></Route>  

                  
            </div>
                    

        )
    }
}

export default KontrolnaTabla;
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ucitajPostove, ucitajKategorije } from '../../actions'


import Header from '../header'
import Opcije from './opcije'
import ListaPostova from '../postovi/lista-postova'
import DodajPost from './forms/dodajPost'
import DodajKategoriju from './forms/dodajKategoriju'

class KontrolnaTabla extends Component {
    componentDidMount = () => {
        this.props.ucitajPostove(this.props.userId);
        this.props.ucitajKategorije(this.props.userId);
        
    }
    
    render() {
        return (
            <div>
                <Header color='bg-primary' text='Kontrolna tabla' icon='fa fa-cog' />
                <Opcije />
                <Route exact path={this.props.match.path} component={ListaPostova}></Route>
                <Route path={`${this.props.match.path}/newPost`} component={DodajPost}></Route>
                <Route exact path={`${this.props.match.path}/newCategory`} component={DodajKategoriju}></Route>
            </div>
                    

        )
    }
}


const mapStateToProps = (state) => {
    return {
        userId: state.app.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ucitajPostove, ucitajKategorije}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(KontrolnaTabla);
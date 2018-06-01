import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from './header'
import LogIn from './log-in'
import KontrolnaTabla from './kontrolna-tabla'

class Home extends Component {
    renderHome() {
        if(this.props.is_logged) {
            return (
                <Route path={this.props.match.path} component={KontrolnaTabla}></Route>
            );
        }
        else {
            return (
                <div>
                    <Header color='bg-primary' icon='fa fa-user' text='Blog tool' />
                    <LogIn />
                </div>
            );
        }
    }
    render() {
        return(
            <div>
                {this.renderHome()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        is_logged: state.app.is_logged
    }
}

export default connect(mapStateToProps, null)(Home);

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../actions'


class Navigacija extends Component {


    onLogout() {
        this.props.logout();
    }

    renderNavbar() {
        if(this.props.is_logged){
            return(
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
                    <div className="container">
                        <Link className='navbar-brand' to='/'>Pocetna</Link>
                        <button className="navbar-toggler" data-toggle='collapse' data-target='#navbar'>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id='navbar'>
                            <ul className="navbar-nav">
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/panel'>Kontrolna tabla</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/posts'>Postovi</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/category'>Kategorije</Link>
                                </li>
                                <li className="nav-item px-2" onClick={this.onLogout.bind(this)}>
                                    <Link className='nav-link' to=''>Odjavi se</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
                    <div className="container">
                        <Link className='navbar-brand' to='/'>Pocetna</Link>
                    </div>
                </nav>
            )
        }
    }

    render() {
        return (
            <div>
                {this.renderNavbar()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        is_logged: state.app.is_logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigacija);

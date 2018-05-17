import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigacija extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-0">
                    <div className="container">
                        <Link className='navbar-brand' to='/'>Pocetna</Link>
                        <button className="navbar-toggler" data-toggle='collapse' data-target='#navbar'>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id='navbar'>
                            <ul className="navbar-nav">
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/'>Kontrolna tabla</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/'>Postovi</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/'>Kategorije</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/'>Korisnici</Link>
                                </li>
                            </ul>

                            <ul className='navbar-nav ml-auto'>
                                <li className="nav-item dropdown mr-3">
                                    <Link className="nav-link dropdown-toggle" to='#' data-toggle='dropdown'>
                                        <i className='fa fa-user'></i> Text
                                    </Link>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to='/'>
                                            <i className="fa fa-user-circle"></i> Profil
                                        </Link>
                                        <Link className="dropdown-item" to='/'>
                                            <i className='fa fa-cog'></i> Podesavanja
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>
                                        <i className="fa fa-user-times"></i> Odjavi se
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigacija;


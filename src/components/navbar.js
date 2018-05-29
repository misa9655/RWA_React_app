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
                                    <Link className='nav-link' to='/panel'>Kontrolna tabla</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/posts'>Postovi</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/category'>Kategorije</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className='nav-link' to='/users'>Korisnici</Link>
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

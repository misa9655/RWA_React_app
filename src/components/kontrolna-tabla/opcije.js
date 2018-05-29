import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Opcije extends Component {
    render() {
        return (
            <div>
                <section className="py-4 mb-4 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <NavLink to="/new" className="btn btn-primary btn-block">
                                    <i className="fa fa-plus"></i> Novi post
                                </NavLink>
                            </div>
                            <div className="col-md-3">
                                <NavLink to="/newCategory" className="btn btn-success btn-block">
                                    <i className="fa fa-plus"></i> Dodaj kategoriju
                                </NavLink>
                            </div>
                            <div className="col-md-3">
                                <NavLink to="/newUser" className="btn btn-warning btn-block text-white">
                                    <i className="fa fa-plus"></i> Dodaj korisnika
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }

}

export default Opcije;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import DodajPost from './modals/dodajPost'
import DodajKategoriju from './modals/dodajKategoriju'
import DodajKorisnika from './modals/dodajKorisnika'

class Opcije extends Component {
    render() {
        return (
            <div>
                <section id="action" className="py-4 mb-4 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Link to="#" className="btn btn-primary btn-block" data-toggle="modal" data-target="#dodajPost">
                                    <i className="fa fa-plus"></i> Novi post
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="#" className="btn btn-success btn-block" data-toggle="modal" data-target="#dodajKategoriju">
                                    <i className="fa fa-plus"></i> Dodaj kategoriju
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <Link to="#" className="btn btn-warning btn-block text-white" data-toggle="modal" data-target="#dodajAdmina">
                                    <i className="fa fa-plus"></i> Dodaj korisnika
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <DodajPost />
                <DodajKategoriju />
                <DodajKorisnika />

            </div>
        )
    }

}

export default Opcije;

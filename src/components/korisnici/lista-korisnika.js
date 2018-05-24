import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ucitajKorisnike } from '../../actions'


class ListaKorisnika extends Component {

    componentWillMount = () => {
      this.props.ucitajKorisnike();
    }

    renderUsers(korisnici) {
        if(korisnici) {
            return korisnici.map((korisnik, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{korisnik.ime}</td>
                        <td>{korisnik.email}</td>
                    </tr>
                )
            })
        }
    }
    

    render() {
        return (
            <section id="posts">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Lista postova</h4>
                                </div>
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Naziv</th>
                                            <th>E-mail</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderUsers(this.props.korisnici)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        korisnici: state.post.korisnici
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ucitajKorisnike}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaKorisnika);
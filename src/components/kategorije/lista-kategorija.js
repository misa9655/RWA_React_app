import React, { Component } from 'react'
import { connect } from "react-redux";


class ListaKategorija extends Component {


    kategorijeRender(kategorije) {
        if(kategorije) {
            return kategorije.map((kategorija, index) => {
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{kategorija.name}</td>
                    </tr>
                );
            });
        }
    }

    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Lista kategorija</h4>
                                </div>
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Naziv</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.kategorijeRender(this.props.kategorije)}
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
        kategorije: state.app.kategorije
    }
}

export default connect(mapStateToProps, null)(ListaKategorija)

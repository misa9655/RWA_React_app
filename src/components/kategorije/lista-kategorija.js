import React, { Component } from 'react'

class ListaKategorija extends Component {
    render() {
        return (
            <section id="pos">
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
                                        {}
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

export default ListaKategorija;

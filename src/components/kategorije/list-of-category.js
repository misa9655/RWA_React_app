import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                                        <tr>
                                            <td>#</td>
                                            <td>#</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <nav className="ml-4">
                                    <ul className="pagination">
                                        <li className="page-item disabled"><Link to="" className="page-link">Previous</Link></li>
                                        <li className="page-item active"><Link to="" className="page-link">1</Link></li>
                                        <li className="page-item"><Link to="" className="page-link">2</Link></li>
                                        <li className="page-item"><Link to="" className="page-link">3</Link></li>
                                        <li className="page-item"><Link to="" className="page-link">Next</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default ListaKategorija;
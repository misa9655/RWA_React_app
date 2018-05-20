import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListaKorisnika extends Component {
    render() {
        return (

            <section id="po">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Lista korisnika</h4>
                                </div>
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Naziv</th>
                                            <th>E-mail</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#</td>
                                            <td>#</td>
                                            <td>#</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <nav class="ml-4">
                                    <ul class="pagination">
                                        <li class="page-item disabled"><Link to="" class="page-link">Previous</Link></li>
                                        <li class="page-item active"><Link to="" class="page-link">1</Link></li>
                                        <li class="page-item"><Link to="" class="page-link">2</Link></li>
                                        <li class="page-item"><Link to="" class="page-link">3</Link></li>
                                        <li class="page-item"><Link to="" class="page-link">Next</Link></li>
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

export default ListaKorisnika;
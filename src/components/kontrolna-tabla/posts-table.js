import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PostsTable extends Component {
    render() {
        return (
           <section id="posts">
               <div className="container">
                   <div className="row">
                       <div className="col-md-9">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Najnoviji Postovi</h4>
                                </div>
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Naslov</th>
                                            <th>Kategorija</th>
                                            <th>Datum</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#</td>
                                            <td>#</td>
                                            <td>#</td>
                                            <td>#</td>
                                            <td>#</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                       </div>
                        <div className="col-md-3">
                            <div className="card text-center bg-primary text-white mb-3">
                                <div className="card-body">
                                    <h3>Postovi</h3>
                                    <h1 className="display-4">
                                        <i className="fas fa-pencil-alt"></i> 0
                                    </h1>
                                    <Link to='/posts' className="btn btn-outline-light btn-sm">Pregled</Link>
                                </div>
                            </div>

                            <div className="card text-center bg-success text-white mb-3">
                                <div className="card-body">
                                    <h3>Kategorije</h3>
                                    <h1 className="display-4">
                                        <i className="far fa-folder-open"></i> 0
                                    </h1>
                                    <Link to='/category' className="btn btn-outline-light btn-sm">Pregled</Link>
                                </div>
                            </div>

                            <div className="card text-center bg-warning text-white mb-3">
                                <div className="card-body">
                                    <h3>Korisnici</h3>
                                    <h1 className="display-4">
                                        <i className="fa fa-users"></i> 0
                                    </h1>
                                    <Link to='/users' className="btn btn-outline-light btn-sm">Pregled</Link>
                                </div>
                            </div>

                       </div>
                   </div>
               </div>
           </section>
        )
    }
}

export default PostsTable
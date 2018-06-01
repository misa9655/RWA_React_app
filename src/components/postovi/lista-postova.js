import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ListaPostova extends Component {
    
    renderPosts(posts) {
        if(posts) {
            return posts.map((post, index) => {
                return (
                    <tr key={post.id}>
                        <td>{index + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.category}</td>
                        <td>{post.date}</td>
                        <td>
                            <Link to={`/editPost/${index}`} className='btn btn-secondary'>
                                Detalji
                            </Link>
                        </td>
                    </tr>
                )
            })
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
                                    <h4>Lista postova</h4>
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
                                        {this.renderPosts(this.props.posts)}
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
        posts: state.app.postovi,
    }
}

export default connect(mapStateToProps, null)(ListaPostova);
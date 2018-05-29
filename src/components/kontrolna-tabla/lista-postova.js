import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { ucitajPostove } from '../../actions'



class ListaPostova extends Component {

    componentDidMount = () => {
      this.props.ucitajPostove();
    }
    

    renderPosts(posts) {
        if(posts) {
            console.log(posts);
            return posts.map((post, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.category}</td>
                        <td>{post.date}</td>
                        <td><button className='btn btn-secondary'>Detalji</button></td>
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
    console.log(state);
    return {
        posts: state.posts.postovi
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ucitajPostove}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaPostova);
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import Header from '../header'
import { editPost, obrisiPost } from '../../actions'


class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            naslov: '',
            kategorija: '',
            body: '',
            id: ''
        }
    }

    handleTitleChange({target}) {
        this.setState({
            naslov: target.value
        })
    }
    handleCategoryChange({target}) {
        this.setState({
            kategorija: target.value
        })
    }
    handleBodyChange({target}) {
        this.setState({
            body: target.value
        })
    }

    componentDidMount = () => {
        const post = this.props.postovi[this.props.match.params.id];
        this.setState({
            naslov: post.title,
            kategorija: post.category,
            body: post.body,
            id: post.id
        })
    }
       
    renderOptions(kategorije){
        if(kategorije){
            return kategorije.map((kategorija, index) => {
                
                return (
                    <option key={index}  value={kategorija.name}>{kategorija.name}</option>
                )
            });
        }
    }

    onSave() {
        this.props.editPost({
            title: this.state.naslov,
            category: this.state.kategorija,
            body: this.state.body
        }, this.state.id, this.props.userId, () => {this.props.history.push('/panel')});
    }

    onDelete() {
        this.props.obrisiPost(this.state.id, () => {this.props.history.push('/panel')});
    }

    render() {
        
        return (
            <div>
                <Header color='bg-primary' text='Edit post' icon='fa fa-cog' />
                <section className="py-4 mb-4 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 mr-auto">
                                <Link to='/panel' className="btn btn-light btn-block">
                                    <i className="fa fa-arrow-left"></i> Nazad
                                </Link>
                            </div>
                            <div className="col-md-3">
                                <button onClick={this.onSave.bind(this)} className="btn btn-success btn-block">
                                    <i className="fa fa-check"></i> Sacuvaj
                                </button>
                            </div>
                            <div className="col-md-3">
                                <button onClick={this.onDelete.bind(this)} className="btn btn-danger btn-block">
                                    <i className="fa fa-remove"></i> Obrisi post
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Edit post</h4>
                                </div>
                                <div className="card-body">
                                    <form>

                                        <div className="form-group">
                                            <label>Naslov</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={this.state.naslov}
                                                onChange={this.handleTitleChange.bind(this)}
                                            />

                                        </div>
                                        <div className="form-group">
                                            <label>Kategorija</label>
                                            <select
                                                className='form-control'
                                                value={this.state.kategorija}
                                                onChange={this.handleCategoryChange.bind(this)}
                                            >
                                                {this.renderOptions(this.props.kategorije)}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Body</label>
                                            <textarea
                                                className='form-control'
                                                value={this.state.body}
                                                cols="30"
                                                rows="10"
                                                onChange={this.handleBodyChange.bind(this)}
                                            ></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postovi: state.app.postovi,
        kategorije: state.app.kategorije,
        userId: state.app.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ obrisiPost, editPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { dodajPost } from '../../../actions'

class DodajPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            naslov: '',
            kategorija: '',
            body: ''
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

    renderOptions(kategorije){
        if(kategorije){
            return kategorije.map((kategorija, index) => {
                return (
                    <option key={index} value={kategorija.name}>{kategorija.name}</option>
                )
            });
        }
    }

    onSubmit(e){
        e.preventDefault();
        this.props.dodajPost({
            naslov: this.state.naslov,
            kategorija: this.state.kategorija,
            body: this.state.body
        }, this.props.userId, () => {this.props.history.push('/posts')});
    }

    

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h4>Dodaj post</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this)}>

                                    <div className="form-group">
                                        <label>Naslov</label>
                                        <input
                                            type='text'
                                            className="form-control"
                                            value={this.state.naslov}
                                            onChange={this.handleTitleChange.bind(this)}
                                        />
                                    </div>

                                    <div className="from-group">
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
                                            className="form-control"
                                            cols="30" 
                                            rows="10"
                                            value={this.state.body}
                                            onChange={this.handleBodyChange.bind(this)}
                                        >
                                        </textarea>
                                    </div>

                                    <button className='btn btn-primary'>Sacuvaj</button>
                                </form>
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
        kategorije: state.app.kategorije,
        userId: state.app.user.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({dodajPost}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DodajPost);

import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { dodajKorisnika } from '../../../actions'

class DodajKorisnika extends Component {

    renderInputField(field) {
        return (
            <div className="form-group">
                <label>{field.myLabel}</label>
                <input 
                    {...field.input}
                    type={field.myType} 
                    className="form-control"
                />
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
        this.props.dodajKorisnika(values);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <h5>Dodaj kategoriju</h5>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.props.handleSubmit(event => this.onSubmit(event))}>
                                    <Field
                                        name='username'
                                        myLabel='Username'
                                        myType='text'
                                        component={this.renderInputField}
                                    />
                                    <Field
                                        name='email'
                                        myLabel='E-mail'
                                        myType='email'
                                        component={this.renderInputField}
                                    />
                                    <Field
                                        name='password'
                                        myLabel='Password'
                                        myType='password'
                                        component={this.renderInputField}
                                    />
                                    <Field
                                        name='confPassword'
                                        myLabel='Confirm password'
                                        myType='password'
                                        component={this.renderInputField}
                                    />
                                    <button className='btn btn-warning'>Dodaj</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({dodajKorisnika}, dispatch)
}

export default reduxForm({
    form: 'User'
})(connect(null, mapDispatchToProps)(DodajKorisnika));
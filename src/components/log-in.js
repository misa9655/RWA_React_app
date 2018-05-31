import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'

import { logIn } from '../actions'


class LogIn extends Component {

    renderInputField(field) {
        return (
            <div className="form-group mt-3">
                <label>{field.myLabel}</label>
                <input
                    {...field.input}
                    type={field.myType}
                    className='form-control'
                />
            </div>
        )
    }

    onSubmit(values) {
        console.log(this.prpos);
        
        this.props.logIn(values);
    }

    render() {
        return (
            <section className='mt-5'> 
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Account Login</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.props.handleSubmit(event => this.onSubmit(event))}>
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
                                        
                                        <button className='btn btn-primary btn-block mt-3'>Prijavi se</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logIn}, dispatch);
}


export default reduxForm({
    form: 'LogIn'
})(connect(null, mapDispatchToProps)(LogIn));


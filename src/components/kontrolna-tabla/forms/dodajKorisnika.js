import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

class DodajKorisnika extends Component {

    renderInputField(field) {
        return (
            <div className="form-group">
                <label>{field.myLabel}</label>
                <input 
                    {...field}
                    type={field.myType} 
                    className="form-control"
                />
            </div>
        )
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
                                <form>
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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: 'User'
})(DodajKorisnika);
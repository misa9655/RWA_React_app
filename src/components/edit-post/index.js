import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'

import Header from '../header'


class EditPost extends Component {
    renderInputField(field) {
        return (
            <div className="form-group">
                <label>{field.myLabel}</label>
                <input
                    {...field.input} 
                    type={field.myType} 
                    className="form-control"
                    value={field.myValue}
                />
            </div>
        );
    }   
    renderTextareaField(field) {
        console.log(field);
        return (
            <div className="form-group">
                <label>{field.myLabel}</label>
                <textarea 
                    className="form-control" 
                    {...field.input}
                    value={field.myValue}
                >
                </textarea>
            </div>
        );
    } 
    
    renderSelectField(field) {
        
        const renderOptions = (kategorije) =>{
            if(field.opcije){
                return kategorije.map((kategorija, index) => {
                    return (
                        <option key={index} value={kategorija.name}>{kategorija.name}</option>
                    )
                });
            }
        }
        return (
            <div className="from-group">
                <label>{field.myLabel}</label>
                <select {...field.input} className='form-control'>
                    {renderOptions(field.opcije)}
                </select>
            </div>
        )
    }

    onSubmit(values) {

    }

    render() {
        console.log(this.props.match);
        const post = this.props.postovi[this.props.match.params.id];
        console.log(post);
        return (
            <div>
                <Header color='bg-primary' text='Edit post' icon='fa fa-cog' />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Edit post</h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.props.handleSubmit(event => this.onSubmit(event))}>
                                        <Field 
                                            name='naslov'
                                            myLabel='Naslov'
                                            myType='text'
                                            component={this.renderInputField}
                                            myValue={post.title}
                                            
                                        />

                                        <Field  
                                            name='kategorija'
                                            myLabel='Kategorija'
                                            opcije={this.props.kategorije}
                                            component={this.renderSelectField}
                                        />
                                        
                                        <Field 
                                            name='body'
                                            myLabel='Body'
                                            component={this.renderTextareaField}
                                            myValue={post.body}
                                        />
                
                                        <button className='btn btn-primary'>Sacuvaj</button>
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

export default reduxForm({
    form: 'Edit'
})(connect(mapStateToProps, null)(EditPost))
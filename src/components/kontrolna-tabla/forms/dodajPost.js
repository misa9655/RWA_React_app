import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { ucitajKategorije, dodajPost } from '../../../actions'

class DodajPost extends Component {

    componentDidMount = () => {
        this.props.ucitajKategorije();
    }
    

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

    onSubmit(values){
        console.log(values);
        this.props.dodajPost(values, this.props.userId);
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
                                <form onSubmit={this.props.handleSubmit(event => this.onSubmit(event))}>
                                    <Field 
                                        name='naslov'
                                        myLabel='Naslov'
                                        myType='text'
                                        component={this.renderInputField}
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
                                    />
                                
                                    <div className="form-group">
                                        <label>Postavi sliku</label>
                                        <input type="file" className="form-control-file" />
                                        <small className="form-text text-muted">Max Size 3mb</small>
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
    return bindActionCreators({ucitajKategorije, dodajPost}, dispatch);
}

export default reduxForm({
    form: 'Post'
})(connect(mapStateToProps, mapDispatchToProps)(DodajPost));
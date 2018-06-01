import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { logIn } from '../actions'


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmailChange({target}) {
        this.setState({
            email: target.value
        })
    }
    handlePasswordChange({target}) {
        this.setState({
            password: target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault();
        this.props.logIn({
            email: this.state.email,
            password: this.state.password
        });
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
                                    <form onSubmit={this.onSubmit.bind(this)}>
                                        <div className="form-group mt-3">
                                            <label>E-mail</label>
                                            <input
                                                type='email'
                                                className='form-control'
                                                value={this.state.email}
                                                onChange={this.handleEmailChange.bind(this)}
                                            />
                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Password</label>
                                            <input
                                                type='password'
                                                className='form-control'
                                                value={this.state.password}
                                                onChange={this.handlePasswordChange.bind(this)}
                                            />
                                        </div>
                                        
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


export default connect(null, mapDispatchToProps)(LogIn);


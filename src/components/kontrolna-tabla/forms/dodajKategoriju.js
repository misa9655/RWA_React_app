import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { updateKategorije } from '../../../actions'

class DodajKategoriju extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kategorija: ''
        }
    }

    handleInputChange({target}){
        this.setState({
            kategorija: target.value
        });
    }
    sacuvaj()
    {

        this.props.updateKategorije(this.state.kategorija);
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
                                    <div className="form-group">
                                        <label>Naslov</label>
                                        <input type="text" value={this.state.kategorija} onChange={this.handleInputChange.bind(this)} className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success" onClick={this.sacuvaj.bind(this)}>Sacuvaj</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



// const mapStateToProps = (state) => {
//     return {
//         kategorije: state.posts.kategorije
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateKategorije}, dispatch);
}

export default connect(null, mapDispatchToProps)(DodajKategoriju);
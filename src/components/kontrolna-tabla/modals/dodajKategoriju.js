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

        this.props.updateKategorije([this.state.kategorija, ...this.props.kategorije]);
    }

    render() {
        return (
            <div className="modal fade" id="dodajKategoriju">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-white">
                            <h5 className="modal-title">Dodaj kategoriju</h5>
                            <button className="close" data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Naslov</label>
                                    <input type="text" value={this.state.kategorija} onChange={this.handleInputChange.bind(this)} className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal">Zatvori</button>
                            <button className="btn btn-success" onClick={this.sacuvaj.bind(this)}>Sacuvaj</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        kategorije: state.post.kategorije
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({updateKategorije}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DodajKategoriju);
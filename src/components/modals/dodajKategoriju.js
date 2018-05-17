import React, { Component } from 'react'

class DodajKategoriju extends Component {
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
                                    <input type="text" className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal">Zatvori</button>
                            <button className="btn btn-success" data-dismiss="modal">Sacuvaj</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DodajKategoriju;
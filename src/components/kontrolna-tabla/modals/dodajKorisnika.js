import React, { Component } from 'react'

class DodajKorisnika extends Component {
    render() {
        return (
            <div className="modal fade" id="dodajAdmina">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-warning text-white">
                            <h5 className="modal-title">Dodaj admina</h5>
                            <button className="close" data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Ime</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Sifra</label>
                                    <input type="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label >Potvrdi sifru</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button className="btn btn-warning" data-dismiss="modal">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DodajKorisnika;

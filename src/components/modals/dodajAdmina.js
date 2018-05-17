import React, { Component } from 'react'

class DodajAdmina extends Component {
    render() {
        return (
            <div class="modal fade" id="dodajAdmina">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-warning text-white">
                            <h5 class="modal-title">Dodaj admina</h5>
                            <button class="close" data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label>Ime</label>
                                    <input type="text" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label>Sifra</label>
                                    <input type="password" class="form-control" />
                                </div>
                                <div class="form-group">
                                    <label >Potvrdi sifru</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button class="btn btn-warning" data-dismiss="modal">Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DodajAdmina;

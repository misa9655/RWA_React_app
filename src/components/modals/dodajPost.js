import React, { Component } from 'react'

class DodajPost extends Component {
    render() {
        return (
            <div className="modal fade" id="dodajPost">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Dodaj post</h5>
                            <button className="close" data-dismiss="modal"><span>&times;</span></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Naslov</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label>Kategorija</label>
                                    <select className="form-control">
                                        <option value="">Web Development</option>
                                        <option value="">Business</option>
                                        <option value="">Health & Wellness</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Postavi sliku</label>
                                    <input type="file" className="form-control-file" />
                                    <small className="form-text text-muted">Max Size 3mb</small>
                                </div>
                                <div className="form-group">
                                    <label>Body</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" data-dismiss="modal">Zatvori</button>
                            <button className="btn btn-primary" data-dismiss="modal">Sacuvaj</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default DodajPost;
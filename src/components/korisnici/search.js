import React, { Component } from 'react'

class Search extends Component {
    render() {
        return (
            <section id="action" className="py-4 mb-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder='Search' />
                                <span className="input-group-btn">
                                    <button className="btn btn-warning">Search</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Search;
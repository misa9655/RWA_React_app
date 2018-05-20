import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header id="main-header" className="py-2 bg-success text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1><i className="fa fa-pencil"></i> Kategorije</h1>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default Header;
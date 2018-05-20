import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header id="main-header" class="py-2 bg-warning text-white">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h1><i class="fa fa-users"></i> Korisnici</h1>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default Header;
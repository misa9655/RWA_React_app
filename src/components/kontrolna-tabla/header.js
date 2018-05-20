import React, { Component } from 'react'

class Header extends Component {
  render() {
    console.log(this.props)
    return (
      <header className="py-2 bg-primary text-white">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1><i className="fa fa-cog"></i> Kontrolna tabla</h1>
                </div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header

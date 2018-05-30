import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark text-white mt-5 p-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="lead text-center">Copyright &copy; 2018 Blog tool</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;

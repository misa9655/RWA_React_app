import React from 'react'

const Header = (props) => {
    return (
        <header id="main-header" className={`py-2 ${props.color} text-white`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1><i className={props.icon}></i> {props.text}</h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
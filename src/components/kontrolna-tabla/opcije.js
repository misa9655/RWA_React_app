import React from 'react'
import { Link } from 'react-router-dom'


const Opcije = () => {

    return (
        <div>
            <section className="py-4 mb-4 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Link to="/panel/newPost" className="btn btn-primary btn-block">
                                <i className="fa fa-plus"></i> Novi post
                            </Link>
                        </div>
                        <div className="col-md-3">
                            <Link to="/panel/newCategory" className="btn btn-success btn-block">
                                <i className="fa fa-plus"></i> Dodaj kategoriju
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
 
}

export default Opcije;

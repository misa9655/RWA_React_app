import React from 'react'

const Search = (props) => {

    return (
        <section className="py-4 mb-4 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ml-auto">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder='Search' />
                            <span className="input-group-btn">
                                <button className={`btn ${props.color}`}>Search</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Search;

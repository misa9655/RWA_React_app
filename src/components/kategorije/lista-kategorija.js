import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ucitajKategorije } from "../../actions";

class ListaKategorija extends Component {

    componentDidMount = () => {
        this.props.ucitajKategorije();
    }

    kategorijeRender(kategorije) {
        if(kategorije) {
            return kategorije.map((kategorija, index) => {
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{kategorija}</td>
                    </tr>
                );
            });
        }
    }

    render() {
        return (
            <section id="pos">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Lista kategorija</h4>
                                </div>
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Naziv</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.kategorijeRender(this.props.kategorije)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        kategorije: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ucitajKategorije}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListaKategorija)

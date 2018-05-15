import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { test } from '../actions'

class App extends Component {
    
    
    render() {
        return (
            <div>
                {this.props.text}
                <button onClick={this.props.test}>click</button>
            </div>
        )
    }
}

const mapStateToProps = ({test}) => {
    return {
        text: test.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({test}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

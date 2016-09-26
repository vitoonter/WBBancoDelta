import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { loadGitHub } from '../actions'

class Test1 extends Component {
  componentWillMount() {
    this.props.loadGitHub()
  }

  render() {
    return (
	    <div>
	      Hola test 1
	    </div>
    )
  }
}

Test1.propTypes = {
  loadGitHub: PropTypes.func.isRequired
}

export default connect(null, {
  loadGitHub
})(Test1)

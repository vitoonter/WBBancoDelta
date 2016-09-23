import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import { Router } from 'react-router'
import ConnectedIntlProvider from '../translation/ConnectedIntlProvider'

const Root = ({ store, history }) =>
  <Provider store={store}>
    <ConnectedIntlProvider>
      <Router history={history} routes={routes} />
    </ConnectedIntlProvider>
  </Provider>
    
Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;
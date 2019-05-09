import { Provider } from 'unistore/preact'
import App from './components/app'
import { createStore } from './helpers/store.helper'
import './style'

const store = createStore()

export default () =>
  <Provider store={store}>
    <App />
  </Provider>
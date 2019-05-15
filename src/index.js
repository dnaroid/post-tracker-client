import 'normalize.css'
import { Provider } from 'unistore/preact'
import Layout from './components/Layout'
import { createStore } from './helpers/store.helper'
import './style'

const store = createStore()

export default () => <Provider store={store}>
  <Layout />
</Provider>

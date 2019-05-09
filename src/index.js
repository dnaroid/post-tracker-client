import 'normalize.css'
import { Provider } from 'unistore/preact'
import App from './components/App'
import { createStore } from './store'

const store = createStore()

export default () =>
  <Provider store={store}>
    <App/>
  </Provider>
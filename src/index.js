import 'normalize.css'
import { Provider } from 'unistore/preact'
import App from './components/App'
import { createStore } from './config/store'

const store = createStore()
window.onerror = (...args) => console.warn(args)

export default () =>
  <Provider store={store}>
    <App/>
  </Provider>
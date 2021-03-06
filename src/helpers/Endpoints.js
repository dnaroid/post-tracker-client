import { route } from 'preact-router'
import { ROUTE } from '../config/strings'

export default class Endpoints {
  _host = ''

  constructor(url) {
    this._host = url
  }

  add(url) {
    return new Endpoint(`${this._host}/${url}`)
  }
}

class Endpoint {

  constructor(url) {
    this._url = url
  }

  get = () => this._getRequest(this._url, { method: 'GET' })

  collection = () => this._getRequest(`${this._url}s`, { method: 'GET' })

  post = (data) => this._getRequest(this._url, { method: 'POST', body: JSON.stringify(data) })

  static _getHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  }

  _getRequest = (url, options) =>
    fetch(url, { headers: Endpoint._getHeaders(), ...options })
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .catch(err => {
        if (err.status && err.status === 401) {
          route(ROUTE.Authorisation)
        }
        if (err.text) {
          err.text().then(errorMessage => { console.warn(errorMessage) })
        }
        else {
          console.warn('Error.')
        }
      })

}

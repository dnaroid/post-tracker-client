import Repoint from 'repoint'
import { API_HOST } from './strings'

const repoint = new Repoint({
  host: API_HOST,
  fetchOpts: {
    //credentials: 'include',
    mode: 'cors',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
    //'Access-Control-Allow-Credentials': true
  }
})

export default {
  tracks: repoint.generate('tracks'),
  login: repoint.generate('auth/login'),
  register: repoint.generate('auth/register')
}
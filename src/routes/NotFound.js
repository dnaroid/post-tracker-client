import { connect } from 'unistore/preact'
import actions from '../config/actions'

export default connect('user', actions)(({ user, login, logout, registerUser }) => <div>
  Page not found
</div>)

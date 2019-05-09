import { connect } from 'unistore/preact'
import actions from '../store/actions'

//import st from '../../styles/Common.styles'

export default connect('user', actions)(({ user, login, registerUser }) => <div>
  <button onClick={login}>[Login]</button>
  <button onClick={registerUser}>[Register]</button>
</div>)

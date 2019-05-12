import { connect } from 'unistore/preact'
import { TextInput } from '../components/common/TextInput'
import actions from '../config/actions'
import cs from '../styles/common.styles'

export default connect('user', actions)(
  ({ user, login, logout, registerUser, updateUserProp }) => <cs.Col>
    {user.logged ?
     <cs.Button onClick={logout}>Logout</cs.Button>
                 :
     <form>
       <cs.Col>
         <cs.Row>
           <TextInput
             onChange={v => updateUserProp('email', v)}
             value={user.email}
             label='email'
             type='email'
             name='email'
             autocomplete='username'
           />
           <TextInput
             onChange={v => updateUserProp('password', v)}
             value={user.password}
             label='password'
             type='password'
             name='password'
             autocomplete='current-password'
           />
         </cs.Row>
         <cs.Row>
           <cs.Button onClick={login}>Login</cs.Button>
           <cs.Button onClick={registerUser}>Register</cs.Button>
         </cs.Row>
       </cs.Col>
     </form>}
  </cs.Col>)

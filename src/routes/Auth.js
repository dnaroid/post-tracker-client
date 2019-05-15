import { connect } from 'unistore/preact'
import { Button, Col, Row } from '../components/common'
import { TextInput } from '../components/common/TextInput'
import actions from '../config/actions'

export default connect('user', actions)(
  ({ user, login, logout, registerUser, updateUserProp }) => <Col>
    {user.logged ?
     <Button onClick={logout}>Logout</Button>
                 :
     <form>
       <Col>
         <Row>
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
         </Row>
         <Row>
           <Button onClick={login}>Login</Button>
           <Button onClick={registerUser}>Register</Button>
         </Row>
       </Col>
     </form>}
  </Col>)

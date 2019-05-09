import { connect } from 'unistore/preact'
import actions from '../store/actions'
import { THEME } from '../config/strings'
//import st from '../../styles/Common.styles'

export default connect('settings', actions)(({ setTheme }) =>
  <div onClick={() => setTheme(THEME.DARK)}>HEADER</div>)
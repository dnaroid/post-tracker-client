import { h } from 'preact'
import { route } from 'preact-router'
import scoped from 'scoped-style'
import { connect } from 'unistore/preact'
import actions from '../config/actions'
import cs from '../styles/common.styles'
import Popup from './common/Popup'
//import st from '../../styles/Common.styles'

const styled = scoped(h)

const Wrapper = styled('div')`
  margin-bottom: 20px;
`

export default connect('user', actions)(({}) => <Wrapper>
  <cs.Row>
    <Popup>
      <cs.Card>
        <cs.Col>
          <cs.Button onClick={() => route('/auth')}>Autorize</cs.Button>
          <cs.Button onClick={() => route('/settings')}>Settings</cs.Button>
          <cs.Button onClick={() => route('/')}>My Tracks</cs.Button>
        </cs.Col>
      </cs.Card>
    </Popup>
  </cs.Row>
</Wrapper>)

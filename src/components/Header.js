import { route } from 'preact-router'
import scoped from 'scoped-style'
import { connect } from 'unistore/preact'
import actions from '../config/actions'
import { Button, Card, Col, Row } from './common'
import Popup from './common/Popup'

const styled = scoped(h)

const Wrapper = styled('div')`
  margin-bottom: 20px;
`

export default connect('user', actions)(({}) => <Wrapper>
  <Row>
    <Popup>
      <Card>
        <Col>
          <Button onClick={() => route('/auth')}>Autorize</Button>
          <Button onClick={() => route('/settings')}>Settings</Button>
          <Button onClick={() => route('/')}>My Tracks</Button>
        </Col>
      </Card>
    </Popup>
  </Row>
</Wrapper>)

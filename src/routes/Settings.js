import { connect } from 'unistore/preact'
import { Col } from '../components/common'
import Select from '../components/common/Select'
import actions from '../config/actions'
import { THEME } from '../config/strings'

export default connect('settings', actions)(({ settings, setTheme }) =>
  <Col>
    <Select
      label='Theme'
      items={[THEME.LIGHT, THEME.DARK]}
      value={settings.theme}
      onChange={setTheme}
    />
  </Col>)

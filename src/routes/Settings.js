import { connect } from 'unistore/preact'
import Select from '../components/common/Select'
import actions from '../config/actions'
import { THEME } from '../config/strings'
import cs from '../styles/common.styles'

export default connect('settings', actions)(({ settings, setTheme }) =>
  <cs.Col>
    <Select
      label='Theme'
      items={[THEME.LIGHT, THEME.DARK]}
      value={settings.theme}
      onChange={setTheme}
    />
  </cs.Col>)
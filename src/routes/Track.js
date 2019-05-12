import { route } from 'preact-router'
import { connect } from 'unistore/preact'
import { TextInput } from '../components/common/TextInput'
import actions from '../config/actions'
import cs from '../styles/common.styles'

export default connect('track', actions)(
  ({ track, updateTrackProp, submitTrack }) => <cs.Col>
    <cs.Row>
      <TextInput
        onChange={v => updateTrackProp('number', v)}
        value={track.number}
        label='number'
        type='number'
      />
      <TextInput
        onChange={v => updateTrackProp('title', v)}
        value={track.title}
        label='title'
        type='title'
      />
    </cs.Row>
    <cs.Row>
      <cs.Button onClick={submitTrack}>Create</cs.Button>
      <cs.Button onClick={}>Cancel</cs.Button>
    </cs.Row>
  </cs.Col>)

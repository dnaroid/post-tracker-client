import { Component } from 'preact'
import { route } from 'preact-router'
import { connect } from 'unistore/preact'
import actions from '../config/actions'
import cs from '../styles/common.styles'

@connect('tracks, track', actions)
export default class extends Component {

  componentDidMount() {
    this.props.syncTracks()
  }

  goCreate = () => {
    route('/track/new')
  }

  render({ tracks, track }, { isFormActive }) {
    return (
      <cs.Row>
        <cs.Button onClick={this.goCreate}>
          + ADD TRACK
        </cs.Button>
        {Object.values(tracks).map(t =>
          <div>
            {t.number}
          </div>
        )}
      </cs.Row>
    )
  }
}
import { Component } from 'preact'
import { route } from 'preact-router'
import { connect } from 'unistore/preact'
import { Button } from '../components/common'
import actions from '../config/actions'

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
      <div>
        <Button onClick={this.goCreate}>
          + ADD TRACK
        </Button>
        {Object.values(tracks).map(t =>
          <div>
            {t.number}
          </div>
        )}
      </div>
    )
  }
}

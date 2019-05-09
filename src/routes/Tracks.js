import { Component } from 'preact'
import { connect } from 'unistore/preact'
import actions from '../store/actions'

//import st from '../../styles/Common.styles'

@connect('tracks', actions)
export default class extends Component {

  componentDidMount() {
    this.props.syncTracks()
  }

  render({ tracks }) {
    return (<div>
      {Object.values(tracks).map(t =>
        <div>
          {t.number}
        </div>
      )}
    </div>)
  }

}
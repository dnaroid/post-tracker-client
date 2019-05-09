import Router from 'preact-router'
import { connect } from 'unistore/preact'
import Auth from '../routes/Auth'
import Tracks from '../routes/Tracks'
import actions from '../store/actions'
import cs from '../styles/common.styles'
import Header from './Header'

// import Tracks from 'async!../routes/Tracks';

export default connect('settings', actions)(({ settings, setProp }) =>
  <cs.Page id='app' theme={settings.theme}>
    <Header/>
    <Router onChange={({ router }) => setProp('router', router.state)}>
      <Tracks path='/'/>
      <Auth path='/auth'/>
      {/*  <Profile path='/profile/' user='me' />*/}
      {/*  <Profile path='/profile/:user' />*/}
      {/*  <NotFound default />*/}
    </Router>
  </cs.Page>)

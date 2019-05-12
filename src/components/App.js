import Router from 'preact-router'
import { connect } from 'unistore/preact'
import actions from '../config/actions'
import Auth from '../routes/Auth'
import NotFound from '../routes/NotFound'
import Settings from '../routes/Settings'
import Track from '../routes/Track'
import Tracks from '../routes/Tracks'
import cs from '../styles/common.styles'
import Header from './Header'

// import Tracks from 'async!../routes/Tracks';


export default connect('settings, user', actions)(({ settings, user, setProp }) =>
  <cs.Page id='app' theme={settings.theme}>
    <Header/>
    {user.logged ?
     <Auth path='/'/>
                 :
     <Router onChange={p => setProp('router', p.router.state)}>
       <Tracks path='/'/>
       <Track path='/track/:number'/>
       <Settings path='/settings'/>
       <Auth path='/auth'/>
       <NotFound default/>
     </Router>}
  </cs.Page>)

import Router from 'preact-router'
import { connect } from 'unistore/preact'
import actions from '../config/actions'
import { ROUTE } from '../config/strings'
import Auth from '../routes/Auth'
import NotFound from '../routes/NotFound'
import Settings from '../routes/Settings'
import Track from '../routes/Track'
import Tracks from '../routes/Tracks'
import { Page } from './common'
import Header from './Header'

// import Tracks from 'async!../routes/Tracks'
// import Tracks from 'async!../routes/Track'
// import Tracks from 'async!../routes/Settings'
// import Tracks from 'async!../routes/Auth'
// import Tracks from 'async!../routes/NotFound'

export default connect('user', actions)(({ user, setProp }) =>
  <div id='app'>
    <Header />
    <Page>
      {user.logged ?
       <Auth path='/' />
                   :
       <Router onChange={p => setProp('router', p.router.state)}>
         <Tracks path={ROUTE.Tracks} />
         <Track path={`${ROUTE.Track}/:number`} />
         <Settings path={ROUTE.Settings} />
         <Auth path={ROUTE.Authorisation} />
         <NotFound default />
       </Router>}
    </Page>
  </div>)

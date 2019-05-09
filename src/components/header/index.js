import { Component } from 'preact'
import Dialog from 'preact-material-components/Dialog'
import 'preact-material-components/Dialog/style.css'
import Drawer from 'preact-material-components/Drawer'
import 'preact-material-components/Drawer/style.css'
import List from 'preact-material-components/List'
import 'preact-material-components/List/style.css'
import Switch from 'preact-material-components/Switch'
import 'preact-material-components/Switch/style.css'
import TopAppBar from 'preact-material-components/TopAppBar'
import 'preact-material-components/TopAppBar/style.css'
import { route } from 'preact-router'
import { connect } from 'unistore/preact'
import { actionsSettings } from '../../actions/settings.actions'
import { THEME } from '../../config/strings'
// import style from './style';

@connect('settings', actionsSettings)
export default class Header extends Component {
  closeDrawer() {
    this.drawer.MDComponent.open = false
    this.state = {
      darkThemeEnabled: false
    }
  }

  openDrawer = () => (this.drawer.MDComponent.open = true)

  openSettings = () => this.dialog.MDComponent.show()

  drawerRef = drawer => (this.drawer = drawer)
  dialogRef = dialog => (this.dialog = dialog)

  linkTo = path => () => {
    route(path)
    this.closeDrawer()
  }

  goHome = this.linkTo('/')
  goToMyProfile = this.linkTo('/profile')

  switchTheme = () => {
    const { settings: { theme }, setTheme } = this.props
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK)
  }

  render(props) {
    console.log(props)
    return (
      <div>
        <TopAppBar className='topappbar'>
          <TopAppBar.Row>
            <TopAppBar.Section align-start>
              <TopAppBar.Icon menu onClick={this.openDrawer}>
                menu
              </TopAppBar.Icon>
              <TopAppBar.Title>Preact app</TopAppBar.Title>
            </TopAppBar.Section>
            <TopAppBar.Section align-end shrink-to-fit onClick={this.openSettings}>
              <TopAppBar.Icon>settings</TopAppBar.Icon>
            </TopAppBar.Section>
          </TopAppBar.Row>
        </TopAppBar>
        <Drawer modal ref={this.drawerRef}>
          <Drawer.DrawerContent>
            <Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
              <List.ItemGraphic>home</List.ItemGraphic>
              Home
            </Drawer.DrawerItem>
            <Drawer.DrawerItem selected={props.selectedRoute === '/profile'} onClick={this.goToMyProfile}>
              <List.ItemGraphic>account_circle</List.ItemGraphic>
              Profile
            </Drawer.DrawerItem>
          </Drawer.DrawerContent>
        </Drawer>
        <Dialog ref={this.dialogRef}>
          <Dialog.Header>Settings</Dialog.Header>
          <Dialog.Body>
            <div>
              Enable dark theme <Switch onClick={this.switchTheme} />
            </div>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.FooterButton accept>OK</Dialog.FooterButton>
          </Dialog.Footer>
        </Dialog>
      </div>
    )
  }
}

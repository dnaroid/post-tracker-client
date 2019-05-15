import { Component, h } from 'preact'
import scoped from 'scoped-style'
import { Icon } from './index'

const styled = scoped(h)

const Popup = styled('div')`
  z-index: 2000;
  position: fixed;
  overflow: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
 `
const Cover = styled('div')`
  z-index: 1000;
  background-color: rgba(127,127,127,0.5);
  opacity: 0.5;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
 `

export default class extends Component {
  state = { active: false }

  open = () => {
    this.setState({ active: true })
  }

  close = () => {
    this.setState({ active: false })
  }

  render({ trigger, children }, { active }) {
    return <div>
      <div onClick={this.open}>
        {trigger || <Icon>menu</Icon>}
      </div>
      {active &&
       <div>
         <Cover onClick={this.close} />
         <Popup onClick={this.close}>
           {children}
         </Popup>
       </div>}
    </div>
  }
}

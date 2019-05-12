import { Component, h } from 'preact'
import scoped from 'scoped-style'
import size from '../../config/size'

const styled = scoped(h)

const Popup = styled('div')`
  z-index: 2000;
  position: fixed;
  overflow: auto;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
 `
const Burger = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: ${() => size.inputHeight}px;
  width: 20px;
  :hover { opacity: 0.5; }
 `
const BurgerLine = styled('div')`
  height: 2px;
  width: 24px;
  background-color: currentColor;
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
        {trigger || <Burger><BurgerLine/><BurgerLine/><BurgerLine/></Burger>}
      </div>
      {active &&
       <div>
         <Cover onClick={this.close}/>
         <Popup onClick={this.close}>
           {children}
         </Popup>
       </div>}
    </div>
  }
}

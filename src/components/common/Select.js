import { h } from 'preact'
import scoped from 'scoped-style'
import size from '../../config/size'
import cs from '../../styles/common.styles'
import Popup from './Popup'

const styled = scoped(h)

const Wrapper = styled('div')`
  position: relative;
  height: ${() => size.inputHeight}px;
  border: 1px solid currentColor;
 `
const Value = styled('div')`
  padding: 0 8px;
  :hover { opacity: 0.5; }
 `
export const Item = styled('div')`
  white-space: nowrap;
  padding: ${() => size.inputHeight}px;
  :hover { opacity: 0.5; }
 `
const Check = styled('div')`
  position: absolute;
  margin-left: -14px;
  margin-top: 8px;
  height: 8px;
  width: 5px;
  border-bottom: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: rotate(45deg);
 `
const Caret = styled('div')`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 8px;
  width: 8px;
  border-bottom: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: rotate(45deg);
 `
const Label = styled('div')`
  position: absolute;
	font-size: 10px;
  top: -${() => size.inputHeight / 5}px;
  left: 5px;
  padding: 0 2px;
  text-transform: uppercase;
`

export default ({ items, value, label, onChange = () => {} }) =>
  <Popup trigger={
    <Wrapper> <Value>{value} <Caret/></Value>
      <Label>{label}</Label>
    </Wrapper>}>
    <cs.Card>
      {items.map(item =>
        <Item onClick={() => onChange(item)}>
          {item === value && <Check/>}
          {item}
        </Item>)}
    </cs.Card>
  </Popup>
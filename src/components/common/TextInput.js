import { h } from 'preact'
import scoped from 'scoped-style'
import size from '../../config/size'

const styled = scoped(h)

const Wrapper = styled('div')`
  position: relative;
  height: ${() => size.inputHeight}px;
  border: 1px solid currentColor;
 `
const Input = styled('input')`
  line-height: ${() => size.inputHeight - 2}px;
  background: transparent;
  border: 0;
  width: calc(100% - 16px);
  display: block;
  color: inherit;
  padding: 0 8px;
 `
const Label = styled('div')`
  position: absolute;
	font-size: 10px;
  top: -${() => size.inputHeight / 5}px;
  left: 5px;
  padding: 0 2px;
  text-transform: uppercase;
`

export const TextInput = props => {
  const { value, onChange, label, icon, ...attrs } = props
  return <Wrapper {...attrs}>
    <Label>{label}</Label>
    <Input
      {...attrs}
      value={value}
      onInput={e => onChange && onChange(e.target.value)}
    />
  </Wrapper>
}
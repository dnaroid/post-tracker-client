import { h } from 'preact'
import scoped from 'scoped-style'

const styled = scoped(h)

const Wrapper = styled('div')`
  position: relative;
  height: 30px;
  border: 1px solid currentColor;
  width: 100%;
 `
const Input = styled('input')`
  line-height: 30px;
  height: 28px;
  background: transparent;
  border: 0;
  width: calc(100% - 16px);
  color: inherit;
  padding: 0 8px;
 `
const Label = styled('div')`
  position: absolute;
	font-size: 10px;
  top: -6px;
  left: 5px;
  padding: 0 2px;
  text-transform: uppercase;
`

export const TextInput = ({ value, onChange, label, icon, ...attrs }) =>
  <Wrapper {...attrs}>
    <Label>{label}</Label>
    <Input
      {...attrs}
      value={value}
      onInput={e => { onChange && onChange(e.target.value) }}
    />
  </Wrapper>

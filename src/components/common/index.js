import { h } from 'preact'
import scoped from 'scoped-style'

const styled = scoped(h)

export const Page = styled('div')`
  width: 100%;
  padding: 0 20px 20px 20px;
`

export const Card = styled('div')`
  padding: 20px;
  border: 1px solid currentColor;
`

export const Button = styled('div')`
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid currentColor;
`

export const Row = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div { margin-left: 20px; width: 100%; } 
  > div:first-child { margin-left: 0; } 
`

export const Col = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div { margin-top: 20px; } 
  > div:first-child { margin-top: 0; } 
`

export const Icon = styled('div')`
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 30px;
  line-height: 1;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
`

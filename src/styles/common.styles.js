import { h } from 'preact'
import scoped from 'scoped-style'
import size from '../config/size'

const styled = scoped(h)

styled.global`
  font-size: ${() => size.fontSize}px;
  div { 
    background-color: inherit;
    box-sizing: border-box;
  }
`

const cs = {

  Page: styled('div')`
    width: 100%;
    padding: 0 20px 20px 20px;
  `,

  Card: styled('div')`
    padding: 20px;
    border: 1px solid currentColor;
  `,

  Button: styled('div')`
    line-height: ${() => size.inputHeight}px;
    padding: 0 10px;
  `,

  Row: styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > div { margin-left: 20px; width: 100%; } 
    > div:first-child { margin-left: 0; } 
  `,

  Col: styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > div { margin-top: 20px; } 
    > div:first-child { margin-top: 0; } 
  `
}

export default cs
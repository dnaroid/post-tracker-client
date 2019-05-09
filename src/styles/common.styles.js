import { h } from 'preact'
import scoped from 'scoped-style'
import themes from '../config/themes'
import { setByProps } from '../helpers/styles.helper'

const styled = scoped(h)

styled.global``

export default {

  Page: styled('div')`
    ${({ theme }) => themes[theme]};
  `,

  Row: styled('div')`
    display: flex;
    flex-direction: row;
    align-items: ${setByProps({ center: 'center', _: 'baseline' })};
    width: ${setByProps({ narrow: 'fit-content', _: '100%' })};
    justify-content: space-between;
    ${({ narrow }) => narrow && `
    > div { margin-left: 20px; } 
    > div:first-child { margin-left: inherit; } `}
  `,

  Col: styled('div')`
    display: flex;
    flex-direction: column;
    width: ${setByProps({ wide: '100%', _: 'auto' })};
  `
}
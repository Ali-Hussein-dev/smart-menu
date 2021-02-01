import * as React from 'react'

interface action {
  type:
    | 'onHH'
    | 'offHH'
    | 'onAvailable'
    | 'offAvailable'
    | 'onLunch'
    | 'offLunch'
}
interface CtxType {
  state: Menu.MegaObj
  dispatch?: React.Dispatch<action>
}
export const Ctx = React.createContext<CtxType>(null)

export const reducer = (
  state: Menu.MegaObj,
  action: action
): Menu.MegaObj | null => {
  switch (action.type) {
    case 'onHH':
      return {
        ...state,
        meta: {
          ...state.meta,
          isHH: true,
        },
      }
    case 'offHH':
      return {
        ...state,
        meta: {
          ...state.meta,
          isHH: false,
        },
      }
    case 'onAvailable':
      return {
        ...state,
        meta: {
          ...state.meta,
          isCocktailAvailable: true,
        },
      }
    case 'offAvailable':
      return {
        ...state,
        meta: {
          ...state.meta,
          isCocktailAvailable: false,
        },
      }
    case 'onLunch':
      return {
        ...state,
        meta: {
          ...state.meta,
          isLunch: true,
        },
      }
    case 'offLunch':
      return {
        ...state,
        meta: {
          ...state.meta,
          isLunch: false,
        },
      }
    default:
      throw Error('Unknown action')
  }
}

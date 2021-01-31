/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Ctx, reducer } from 'src/context'
import MegaList from '../database'
import * as React from 'react'
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"
const Providers = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, MegaList[0])
  return (
    <ChakraProvider>
      {/* <TranslationProvider messages={defaultStrings}> */}
      <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>
      {/* </TranslationProvider> */}
    </ChakraProvider>
  )
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }

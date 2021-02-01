/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { Ctx, reducer } from 'src/context'
import MegaList from '../database'
import * as React from 'react'
import Router from 'next/router'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"
const Providers = ({ children }) => {
  const [pathname, setPathname] = React.useState('/restaurants/trude/drinks')
  const [state, dispatch] = React.useReducer(reducer, MegaList[0])
  const mockRouter = {
    pathname,
    prefetch: jest.fn(),
    query: { menu: 'drinks' },
    push: async (newPathname) => {
      setPathname(newPathname)
    },
  }
  Router.router = mockRouter
  return (
    <ChakraProvider>
      {/* <TranslationProvider messages={defaultStrings}> */}
      <Ctx.Provider value={{ state, dispatch }}>
        <RouterContext.Provider value={mockRouter}>
          {children}
        </RouterContext.Provider>
      </Ctx.Provider>
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

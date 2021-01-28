/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers = ({ children }) => {
  // return children
  return (
    <ChakraProvider>
      {/* <TranslationProvider messages={defaultStrings}> */}
      {children}
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

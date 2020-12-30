import userEvent from '@testing-library/user-event'
import { screen, render } from '@testing-library/react'
import Price from '../../src/components/Price'
describe('Price', () => {
  // eslint-disable-next-line prefer-const
  let visible = false
  const setVisible = () => {
    visible = !visible
  }
  test('setVisible should be called', () => {
    const mockSetVisible = jest.fn(setVisible)
    const { container, asFragment, debug } = render(
      <Price price={3} visible={visible} setVisible={mockSetVisible} />
    )
    asFragment()
    debug(container)
    userEvent.click(screen.getByLabelText('info-3'))
    expect(mockSetVisible).toBeCalled()
    expect(mockSetVisible).toBeCalledWith(true)
  })

  test('price matches textContent', () => {
    const { container } = render(
      <Price price={3} visible={visible} setVisible={() => setVisible()} />
    )
    expect(container.textContent).toMatch('3.00')
  })
  test('price snapshot', () => {
    const { container } = render(
      <Price price={3} visible={visible} setVisible={() => setVisible()} />
    )
    expect(container.textContent).toMatchSnapshot()
  })
})

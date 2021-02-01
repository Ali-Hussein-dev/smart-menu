import { LongText } from '../../src/components/leaf-node'
import { render, screen } from '@testing-library/react'
const p =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iusto dolorem veritatis, sapiente modi possimus aspernatur doloremque eveniet autem ipsum necessitatibus eius voluptatibus accusantium aperiam officia perspiciatis amet est dolorum iste. Facere dolorem maiores asperiores.'
describe('LongText', () => {
  test('LongText matches snapshot', () => {
    const { container } = render(<LongText>{p}</LongText>)
    expect(container).toMatchSnapshot()
  })
  test('text should be expanded when clicked', () => {
    const { asFragment } = render(<LongText>{p}</LongText>)
    const expand = screen.getByTestId('text-expand')
    expand.click()
    expect(asFragment).toMatchSnapshot()
  })
  test('text should be collapsed when second time clicked', () => {
    const { asFragment } = render(<LongText>{p}</LongText>)
    const expand = screen.getByTestId('text-expand')
    expand.click()
    expand.click()
    expect(asFragment).toMatchSnapshot()
  })
})

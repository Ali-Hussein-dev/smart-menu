import { render } from '@testing-library/react'
import AccordionBody from '../../src/components/AccordionBody'
import dishes from '../../database/dishes/dishes'

describe('AccordionBody', () => {
  test('should match snapshot', () => {
    const { container } = render(
      <AccordionBody ImgSrc={dishes[0].ImgSrc} list={dishes[0].list} id={2} />
    )
    expect(container).toMatchSnapshot()
  })
  test('should match snapshot when extra is true', () => {
    const { container } = render(
      <AccordionBody
        ImgSrc={dishes[1].ImgSrc}
        list={dishes[1].list}
        extra={dishes[1].extra}
        id={2}
      />
    )
    expect(container).toMatchSnapshot()
  })
})

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import {
  GetDrinks,
  MenuTop,
  LoadIndicator,
  SliderChildren,
  CC,
} from '../leaf-node'
import DrinkItem from './DrinkItem'
import * as React from 'react'
import SlidersContainer from './SlidersContainer'
import { SwiperSlide } from 'swiper/react'

const DynamicPanel = dynamic(() => import('./DynamicPanel'), {
  ssr: false,
  loading: () => <LoadIndicator />,
})

interface DrinksProps {
  drinks: [Menu.Header, Menu.List<Menu.Item>][]
}
//=======================
const DrinksAccordion: React.FC<DrinksProps> = ({ drinks: list }) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <>
      <Accordion allowToggle allowMultiple>
        {list.map((o, i) => (
          <AccordionItem key={i}>
            <AccordionButton
              _focus={{ bg: 'gray.400', outline: 'none' }}
              _expanded={{ bg: 'gray.200', boxShadow: 'md' }}
            >
              <CC isTrue={o[0].iconName}>
                <MenuTop
                  header={o[0].header}
                  Component={<GetDrinks iconName={o[0].iconName} />}
                />
              </CC>
              {!o[0].iconName && (
                <MenuTop
                  header={o[0].header}
                  assest={{ avatarSrc: '/trude/mojito.jpg' }}
                />
              )}
            </AccordionButton>
            <AccordionPanel>
              <DynamicPanel>
                {o[1].list.map((arr, i) => (
                  <div key={i}>
                    <MenuTop
                      header={arr[0].header}
                      assest={{ imgSrc: arr[0]?.imgSrc }}
                    />
                    {arr[0]?.isSliders ? (
                      <SlidersContainer>
                        {arr[1].itemsList.map((oo, ii) => (
                          <SwiperSlide key={ii}>
                            <SliderChildren imgSrc={oo.imgSrc}>
                              <DrinkItem
                                item={oo}
                                sizeUnit={arr[0]?.sizeUnit}
                                hasHH={arr[0]?.hasHH}
                              />
                            </SliderChildren>
                          </SwiperSlide>
                        ))}
                      </SlidersContainer>
                    ) : (
                      <div>
                        {arr[1].itemsList.map((oo, ii) => (
                          <DrinkItem
                            key={ii}
                            item={oo}
                            sizeUnit={arr[0]?.sizeUnit}
                            hasHH={arr[0]?.hasHH}
                          />
                        ))}
                      </div>
                    )}
                    <CC isTrue={arr[1].addon}>
                      <div className="addon-list">
                        <h4 className="mb-3 font-semibold">
                          {arr[1].addon?.header}
                        </h4>
                        {arr[1].addon?.addonList.map((ooo, iii) => (
                          <div key={iii}>
                            <DrinkItem item={ooo} />
                          </div>
                        ))}
                      </div>
                    </CC>
                  </div>
                ))}
              </DynamicPanel>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
export default DrinksAccordion

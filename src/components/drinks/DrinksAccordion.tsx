import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  HStack,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { GetDrinks, LoadIndicator, SliderChildren, SvgIcon } from '../leaf-node'
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
              <HStack spacing={'16px'}>
                {o[0].iconName && (
                  <SvgIcon color="text-orange-700">
                    <GetDrinks iconName={o[0].iconName} />
                  </SvgIcon>
                )}
                <h2 className="font-bold text-left text-blueGray-600">
                  {o[0].header}
                </h2>
              </HStack>
            </AccordionButton>
            <AccordionPanel>
              <DynamicPanel>
                {o[1].list.map((arr, i) => (
                  <div key={i}>
                    {arr[0]?.header && (
                      <h3 className="mb-5 text-lg font-bold text-center text-blueGray-600">
                        {arr[0].header}
                      </h3>
                    )}
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
                    {arr[1].addon ? (
                      <div className="addon-list">
                        <h4 className="mb-3 font-semibold">
                          {arr[1].addon.header}
                        </h4>
                        {arr[1].addon?.addonList.map((ooo, iii) => (
                          <div key={iii}>
                            <DrinkItem item={ooo} />
                          </div>
                        ))}
                      </div>
                    ) : null}
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

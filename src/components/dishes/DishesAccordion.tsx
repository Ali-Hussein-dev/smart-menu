import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react'
import { DishItem } from './'
import { CC, GetDishes, MenuTop, Price } from '../leaf-node'
import * as React from 'react'
import { Lunch } from './Lunch'
import dayjs from 'dayjs'

//=======================
const DishesAccordion: React.FC<{
  dishes: [Menu.Header, Menu.List<Menu.Item>][]
}> = ({ dishes: list }) => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <>
      <Lunch currentTime={dayjs().get('h') * 60 + dayjs().get('m')} />
      <Accordion allowToggle>
        {list.map((o, i) => (
          <AccordionItem key={i}>
            <AccordionButton
              _focus={{ bg: 'gray.400', outline: 'none' }}
              _expanded={{ bg: 'gray.200', boxShadow: 'md' }}
            >
              <CC isTrue={o[0].iconName}>
                <MenuTop
                  header={o[0].header}
                  Component={<GetDishes iconName={o[0].iconName} />}
                />
              </CC>
            </AccordionButton>
            <AccordionPanel>
              {o[1].list.map((arr, i) => (
                <div key={i}>
                  <CC isTrue={arr[0]?.header}>
                    <h3 className="mb-5 font-semibold text-center">
                      {arr[0].header}
                    </h3>
                  </CC>
                  <MenuTop
                    header={arr[0].header}
                    assest={{ imgSrc: arr[0].imgSrc }}
                  />
                  {arr[1].itemsList.map((oo, ii) => (
                    <DishItem key={ii} item={oo} />
                  ))}
                  <CC isTrue={arr[1].addon}>
                    <div className="addon-list">
                      <h4 className="mb-3 font-semibold">
                        {arr[1].addon?.header}
                      </h4>
                      {arr[1].addon?.addonList.map((ooo, iii) => (
                        <div
                          key={iii}
                          className="flex justify-between mb-2 text-blueGray-600"
                        >
                          <span>{ooo.name}</span>
                          <Price price={ooo.price} />
                        </div>
                      ))}
                    </div>
                  </CC>
                </div>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
export default DishesAccordion

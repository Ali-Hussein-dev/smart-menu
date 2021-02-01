import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  HStack,
} from '@chakra-ui/react'
import { DishItem } from './'
import { GetDishes, Price, SvgIcon } from '../leaf-node'
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
              <HStack spacing={o[0].iconName && '10px'}>
                {o[0].iconName && (
                  <SvgIcon color="text-orange-700">
                    <GetDishes iconName={o[0].iconName} />
                  </SvgIcon>
                )}
                <h2 className="font-bold text-left text-md text-blueGray-600">
                  {o[0].header}
                </h2>
              </HStack>
            </AccordionButton>
            <AccordionPanel>
              {o[1].list.map((arr, i) => (
                <div key={i}>
                  {arr[0]?.header && (
                    <h3 className="mb-5 font-semibold text-center">
                      {arr[0].header}
                    </h3>
                  )}
                  {arr[1].itemsList.map((oo, ii) => (
                    <DishItem key={ii} item={oo} />
                  ))}
                  {arr[1].addon ? (
                    <div className="addon-list">
                      <h4 className="mb-3 font-semibold">
                        {arr[1].addon.header}
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
                  ) : null}
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

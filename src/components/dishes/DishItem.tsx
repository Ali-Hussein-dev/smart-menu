import { GetDishes, Price, SvgIcon } from '../leaf-node'
import { useDisclosure } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { LongText } from '../leaf-node'

interface Props extends Menu.Item, Menu.DishItem {}
//=======================
export const DishItem: React.FC<{ item: Props }> = ({ item }) => {
  // hooks
  const { isOpen, onClose, onToggle } = useDisclosure()
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="flex justify-between mb-4 text-blueGray-600">
      <div className="">
        <div className="flex items-center gap-x-1">
          {item.info?.eatStyle?.infoList.filter((o) => o.label === 'Vegan')
            .length === 1 && (
            <SvgIcon size="w-6 h-6">
              <GetDishes iconName="vegan" color="bg-green-500" />
            </SvgIcon>
          )}
          <span className="leading-tighter">{item.name}</span>
        </div>
        <LongText>{item.description}</LongText>
        {item.dressing && (
          <span className="flex items-center gap-x-1 text-blueGray-500">
            <SvgIcon size="w-10 h-10 text-blue-300">
              <GetDishes iconName="dressing" />
            </SvgIcon>
            {item.dressing}
          </span>
        )}
      </div>
      <Price
        isInfo={true}
        price={item.price}
        isOpen={isOpen}
        onToggle={onToggle}
      />
      <Drawer placement={'bottom'} isOpen={isOpen} onClose={onClose} size="md">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">{item.name}</DrawerHeader>
            <DrawerBody>
              <h2 className="font-semibold">{item.info?.allergen?.header}</h2>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  )
}

import { Avatar, Divider, HStack } from '@chakra-ui/react'
import { CC } from './CC'
import { SvgIcon } from './SvgIcon'
interface Assests {
  [name: string]: string
}
//=======================
export const MenuTop: React.FC<{
  header: string
  H?: React.ElementType
  assest?: Assests
  Component?: React.ReactNode
}> = ({ header = '', H = 'h2', assest = {}, Component }) => {
  // hooks
  //--------------------------------------
  // functions
  if (Object.keys(assest).length > 1) {
    throw new Error('Assest must have only ONE property')
  }
  if (!assest.imgSrc && !Component && !assest.avatarSrc) {
    return (
      <CC isTrue={header}>
        <H className="text-lg font-semibold text-center text-blueGray-600 ">
          {header}
        </H>
      </CC>
    )
  }
  //--------------------------------------
  if (assest.imgSrc) {
    return (
      <div className="flex flex-col px-2 mb-3">
        <CC isTrue={assest.imgSrc}>
          <img
            src={assest.imgSrc}
            alt={header}
            className="mx-auto mt-2 mb-2 rounded-lg"
          />
        </CC>
        <CC isTrue={header}>
          <H className="text-lg font-semibold text-center text-blueGray-600 ">
            {header}
          </H>
        </CC>
        <Divider variant="dashed" />
      </div>
    )
  }
  return (
    <HStack spacing={'8px'}>
      <CC isTrue={Component}>
        <SvgIcon color="text-orange-700">{Component}</SvgIcon>
      </CC>
      <CC isTrue={assest.avatarSrc}>
        <Avatar src={assest.avatarSrc} />
      </CC>
      <H className="text-sm font-semibold break-all text-blueGray-600">{header}</H>
    </HStack>
  )
}

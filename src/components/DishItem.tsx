import { useState } from 'react'
import { Drawer } from 'antd'
import Price from './Price'
import { ImInfo } from 'react-icons/im'

export const DrawerTitle: React.FC<{ name: string }> = ({ name: cuisine }) => (
  <span className=" text-blueGray-600">
    <div className="flex items-start gap-x-2">
      <ImInfo className="mt-1 text-blueGray-400" />{' '}
      <div className="flex flex-col items-start justify-start">
        <span>Zusatzstoffe Info:</span>
        <span className="text-sm font-thin">{cuisine}</span>
      </div>
    </div>
  </span>
)
interface Props {
  name: string
  description: string
  price: number
}
//=======================
const DishItem: React.FC<Props> = ({ price, name, description }) => {
  // hooks
  const [visible, setVisible] = useState(false)
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="flex justify-between bg-blueGray-400">
      <div className="">
        <span className="font-semibold">{name}</span>
        <p className="">{description}</p>
      </div>
      <Price price={price} visible={visible} setVisible={setVisible} />
      <Drawer
        title={<DrawerTitle name={name} />}
        placement={'bottom'}
        closable={true}
        onClose={() => setVisible(false)}
        visible={visible}
        key={'bottom'}
        headerStyle={{
          backgroundColor: '#F8FAFC',
          color: '#334155',
        }}
        bodyStyle={{
          color: '#94A3B8',
        }}
      >
        <p data-testid="drawer">Keine Vorgabe!</p>
      </Drawer>
    </div>
  )
}
export default DishItem

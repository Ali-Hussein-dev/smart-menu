import { GetMenuType, SvgIcon } from '@/components/leaf-node'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MegaList from '@/database/index'
const Button: React.FC<{
  label: string
  name: string
  endpoint: IconNames
}> = ({ label, endpoint, name }) => {
  return (
    <button
      className="flex items-center w-full py-2 pl-2 pr-6 mb-6 text-blue-400 transform rounded-lg shadow-lg bg-blueGray-50 active:scale-90 focus:outline-none"
      aria-label={endpoint}
    >
      <SvgIcon color="text-blue-300">
        <GetMenuType iconName={endpoint} />
      </SvgIcon>
      <Link
        href="/restaurants/[name]/[menu]"
        as={`/restaurants/${name}/${endpoint}`}
      >
        <span className="ml-2 font-bold ">{label}</span>
      </Link>
    </button>
  )
}

const RestaurantPage: React.FC = () => {
  const r = useRouter()
  const { name } = r.query
  return (
    <div className="grid h-screen px-6 place-items-center bg-blueGray-200">
      <div className="pb-6 overflow-hidden bg-white shadow-xl rounded-xl place-items-cen">
        <img
          className="mb-6 object-scale-down "
          src={MegaList[0].meta.imgSrc}
          alt={MegaList[0].name}
        />
        <div className="flex flex-col items-center justify-center px-14 lg:text-base text-blueGray-50">
          <Button
            label="Speisekarte"
            name={typeof name === 'string' ? name : 'noname'}
            endpoint="dishes"
          />
          <Button
            label="Getränkekarte"
            name={typeof name === 'string' ? name : 'noname'}
            endpoint="drinks"
          />
        </div>
      </div>
    </div>
  )
}
export default RestaurantPage

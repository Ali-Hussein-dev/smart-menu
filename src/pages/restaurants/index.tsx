import MegaList from '@/database/index'
import { Avatar } from '@chakra-ui/react'
import Link from 'next/link'

//=======================
const RestaurantsIndex: React.FC = () => {
  // hooks
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <div className="flex flex-col items-center min-h-screen pt-4 text-3xl bg-blueGray-200 text-blueGray-700">
      <h1 className="mb-5">Restaurants Liste</h1>
      {MegaList.map((o) => (
        <div
          className="flex items-center w-10/12 px-5 py-3 rounded-lg shadow-lg md:w-8/12 gap-x-4 bg-blueGray-50"
          key={o.name}
        >
          <Avatar src={o.meta.imgSrc} name={o.name} size="xl" />
          <Link href={`/restaurants/${o.name}`}>
            <a>{o.name}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}
export default RestaurantsIndex

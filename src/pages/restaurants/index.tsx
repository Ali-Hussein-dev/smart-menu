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
    <div className="flex flex-col items-center h-screen pt-4 text-2xl text-blueGray-700">
      <h1 className="mb-5 font-bold text-blue-400">Restaurants Liste</h1>
      {MegaList.map((o) => (
        <Link key={o.name} href={`/restaurants/${o.name}`}>
          <button className="flex items-center w-11/12 px-5 py-1 mb-3 text-lg border rounded-lg md:w-8/12 bg-blueGray-50 gap-x-4 hover:shadow focus:outline-none" role="button" aria-label="restaurant-page">
            <Avatar src={o.meta.imgSrc} name={o.name} size="lg" />
            <a>{o.name}</a>
          </button>
        </Link>
      ))}
    </div>
  )
}
export default RestaurantsIndex

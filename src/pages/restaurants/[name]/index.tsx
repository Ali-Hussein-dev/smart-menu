import { GetMenuType, SvgIcon } from '@/components/leaf-node'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MegaList from '@/database/index'
import Head from 'next/head'
const Button: React.FC<{
  label: string
  name: string
  endpoint: IconNames
}> = ({ label, endpoint, name }) => {
  return (
    <Link
      href="/restaurants/[name]/[menu]"
      as={`/restaurants/${name}/${endpoint}`}
    >
      <a className=" ">
        <button
          className="w-48 pl-2 pr-8 mb-6 f-row p-btn focus:outline-none"
          aria-label={endpoint}
        >
          <SvgIcon color="text-blue-200">
            <GetMenuType iconName={endpoint} />
          </SvgIcon>
          <span>{label}</span>
        </button>
      </a>
    </Link>
  )
}

const RestaurantPage: React.FC = () => {
  const r = useRouter()
  const { name } = r.query
  return (
    <main>
      <Head>
        <title>{name?.toString().toUpperCase()}</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="grid h-screen place-items-center bg-blueGray-100">
        <div className="mx-2 overflow-hidden bg-white shadow-lg rounded-xl">
          <img
            className="mx-auto mb-6 object-scale-down"
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
    </main>
  )
}
export default RestaurantPage

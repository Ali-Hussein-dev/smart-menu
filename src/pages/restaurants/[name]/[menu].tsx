import * as React from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import MegaList from '@/database/index'
import { Ctx, reducer } from '../../../context'
import Link from 'next/link'
import { GetMenuType, LoadIndicator, SvgIcon } from '@/components/leaf-node'
import Head from 'next/head'
import CocktailWrapper from '@/components/drinks/CocktailWrapper'

const DrinksAccordion = dynamic(
  () => import('../../../components/drinks/DrinksAccordion'),
  {
    loading: () => <LoadIndicator />,
    ssr: false,
  }
)
const DishesAccordion = dynamic(
  () => import('../../../components/dishes/DishesAccordion'),
  {
    loading: () => <LoadIndicator />,
    ssr: false,
  }
)
type MenuType = 'drinks' | 'dishes' | 'cocktail'

//--------------------------------------
const ToggleMenu: React.FC<{ label: MenuType; name: string }> = ({
  label,
  name,
}) => {
  return (
    <Link
      href={`/restaurants/[name]/[menu]`}
      as={`/restaurants/${name}/${label}`}
    >
      <button
        role="button"
        aria-label={label}
        className="transform active:scale-90 focus:outline-none"
      >
        <SvgIcon color="text-blue-400">
          <GetMenuType iconName={label} />
        </SvgIcon>
      </button>
    </Link>
  )
}
//=======================
const MenuPage: React.FC = () => {
  const { drinks, dishes } = MegaList[0].menu.de
  // hooks
  const router = useRouter()
  const [state, dispatch] = React.useReducer(reducer, MegaList[0])
  const { query } = router
  //--------------------------------------
  // functions
  //--------------------------------------
  return (
    <Ctx.Provider value={{ state, dispatch }}>
      <main className="relative flex items-start justify-center w-full min-h-screen text-blueGray-700">
        <Head>
          <title>{query.menu?.toString().toUpperCase()}</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
        <div className="w-full md:w-7/12 lg:w-6/12">
          <div className="sticky top-0 z-50 flex justify-end w-full h-12 px-1 py-1 mb-4 bg-white shadow text-blueGray-600">
            <ToggleMenu
              name={typeof query.name === 'string' ? query.name : 'noname'}
              label={query.menu === 'dishes' ? 'drinks' : 'dishes'}
            />
          </div>
          <div className="w-full font-mono tracking-tighter shadow-lg ">
            <h1 className="mb-2 text-xl font-black tracking-normal text-center uppercase">
              {query.menu === 'dishes' ? dishes.name : drinks.name}
            </h1>
            {query.menu === 'dishes' ? (
              <DishesAccordion dishes={dishes.dishes} />
            ) : (
              <div>
                <DrinksAccordion drinks={drinks.drinks} />
                <CocktailWrapper>
                  <DrinksAccordion drinks={drinks.cocktail} />
                </CocktailWrapper>
              </div>
            )}
          </div>
        </div>
      </main>
    </Ctx.Provider>
  )
}

export default MenuPage

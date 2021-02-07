import Head from 'next/head'
import Link from 'next/link'
import Lottie from 'react-lottie'
import BrowseMenu from '../../public/assests/browse-menu.json'
import { CgMenuCheese } from 'react-icons/cg'
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: BrowseMenu,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const HomeWelcomeText = () => (
  <div className="z-10 items-start mx-2 mb-6 f-col gap-y-5">
    <div className="items-start mx-1 f-col ">
      <h1 className="mr-1 text-3xl font-bold text-orange-700">Interactive-Menu </h1>
      <h2 className="text-2xl font-light text-blue-300 sm:text-3xl">
        für ambitionierte Restaurants
      </h2>
      <p className="sm:text-lg text-blueGray-500">Bringe Dein Restaurant voran, lasse Dich von Technology mehr profitieren.</p>
    </div>
    <div className="justify-center f-row">
      <Link href="/restaurants">
        <button
          className="w-32 text-lg shadow f-row hover:shadow-lg focus:outline-none p-btn gap-x-2"
          aria-label="restaurants"
          role="button"
        >
          <CgMenuCheese size="20" className="text-blueGray-50" />
          <a>Liste</a>
        </button>
      </Link>
    </div>
  </div>
)
export const Home = (): JSX.Element => (
  <div className="grid h-screen place-items-center text-blueGray-600">
    <Head>
      <title>Interactive Menu</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <main className="f-col sm:flex-row">
      {/* <img src="/assests/eating_together.png" className="absolute z-0 mx-auto"/> */}
      <HomeWelcomeText />
      <div className="">
        <div className="w-11/12 sm:w-full">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </main>
  </div>
)

export default Home

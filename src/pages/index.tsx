import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="grid h-screen place-items-center bg-blueGray-100 text-blueGray-600">
    <Head>
      <title>Smart Gastkarte | HomePage</title>
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <main>
      HomePage
    </main>
  </div>
)

export default Home

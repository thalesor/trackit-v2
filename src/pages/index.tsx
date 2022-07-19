import dynamic from 'next/dynamic'

const MainPage = dynamic(
  () => import('../pages/MainApp'),
  { ssr: false }
)

function Home() {
  return (
    <MainPage/>
  )
}

export default Home;
import dynamic from 'next/dynamic'

const SignInPage = dynamic(
  () => import('../pages/SignIn'),
  { ssr: false }
)

function Home() {
  return (
    <SignInPage/>
  )
}

export default Home;
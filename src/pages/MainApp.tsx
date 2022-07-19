import { NextPage } from "next";
import { useRouter } from "next/router";
import useAuth from "../../hooks/useAuth";

interface Props {
  redirectPath?: string;
}

const MainApp: NextPage = () => {
  const router = useRouter();
  const { authData, signOut } = useAuth();
  if (!authData) {
    router.replace('/signin');
  }
  else 
    router.replace('/dashboard');

  function handleSignOut() {
    router.replace('signin');
    signOut();
  }

  return (
    <div>Carregando a página...</div>
  );
}

export default MainApp;
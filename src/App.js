import React from "react";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Auth from "./pages/Auth";
import Kakao from "./components/Kakao";

function App() {
  const ctx = useContext(AuthContext);

  if (!ctx.user) {
    return <Auth />;
  }

  return <Kakao />;
}

export default App;

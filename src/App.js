import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import Auth from "./components/Auth";
import MeetList from "./components/MeetList";
import Bar from "./components/Bar";
import CreateModal from "./components/CreateModal";

function App() {
  const ctx = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [meets, setMeets] = useState([]);

  if (!ctx.user) {
    return <Auth />;
  }

  return (
    <>
      <Bar setOpenModal={setOpenModal} />
      {openModal && (
        <CreateModal
          meets={meets}
          setMeets={setMeets}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
      <MeetList meets={meets} />
    </>
  );
}

export default App;

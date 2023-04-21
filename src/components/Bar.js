import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { useContext, useCallback } from "react";
import AuthContext from "../store/auth-context";

function Bar({ setOpenModal }) {
  const ctx = useContext(AuthContext);

  const buttonClickHandler = useCallback(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <span>{ctx.user}님 안녕하세요</span>
        <Button variant="dark" onClick={buttonClickHandler}>
          생성
        </Button>
      </Container>
    </Navbar>
  );
}

export default Bar;

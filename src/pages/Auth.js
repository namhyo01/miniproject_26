import React, { useState, useContext } from "react";
import AuthContext from "../store/auth-context";

function Auth() {
  const ctx = useContext(AuthContext);
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setInput((input) => {
      return {
        ...input,
        [name]: value,
      };
    });
  };

  const buttonClickHandler = () => {
    ctx.onLogin(input.name);
  };
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={inputHandler}
          />
        </div>
        <div>
          <button type="button" onClick={buttonClickHandler}>
            로그인
          </button>
        </div>
      </form>
    </>
  );
}

export default Auth;

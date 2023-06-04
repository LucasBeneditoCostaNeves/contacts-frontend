import styled from "styled-components";

export const ModalStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  .white {
    width: 60%;
    max-width: 310px;
    background-color: var(--cinza-3);
    margin: 0 auto;
    border-radius: 8px;
  }

  h1 {
    padding: 15px 0px;
    background-color: var(--cinza-4);
    border-radius: 6px 6px 0px 0px;
    margin-left: 0px;
    margin-bottom: 5px;
  }

  div > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  div > button {
    font-size: 35px;
    font-weight: bold;
    background: none;
    border: none;
  }

  .no {
    display: flex;
    justify-content: center;
    background: #0f100c;
    font-size: 23px;
    border-radius: 6px;
    height: 36px;
    width: 36px;
    margin-top: 6px;
  }
`;

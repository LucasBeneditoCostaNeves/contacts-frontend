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

  header {
    border-radius: 8px;
    padding: 12px 9px;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 25px;
    color: white;
  }

  .exit {
    width: 24px;
    height: 24px;
    background: var(--cinza-4);
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--cinza-1);
    box-shadow: 0px 2px 0px #202020;
    border-radius: 16px;
    font-weight: 600;
  }

  form > div {
    flex-direction: column;
    position: relative;
  }

  input {
    width: 80%;
    height: 30px;
    border-radius: 6px;
    margin: 18px 0px 15px 0px;
    background: var(--cor-principal);
    color: white;
  }

  label {
    position: absolute;
    top: 0px;
    left: 25px;
    color: white;
  }

  .buttonConfirme {
    display: block;
    margin: 0px auto 16px;
    height: 50px;
    width: 85%;
    border: none;
    background: var(--toastify-color-dark);
    color: var(--cinza-1);
    border-radius: 8px;
    font-size: 19px;
  }

  span {
    display: flex;
    justify-content: center;
    color: var(--toastify-color-error);
  }
`;

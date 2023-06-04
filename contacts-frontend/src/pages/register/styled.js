import styled from "styled-components";

export const RegisterStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--cor-principal);

  img {
    width: 80px;
  }

  form {
    background-color: var(--cinza-1);
    width: 60%;
    max-width: 215px;
    margin: 0 auto;
    padding: 20px 35px;
    border-radius: 8px;
  }

  form > div {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  label {
    display: flex;
    position: absolute;
    top: 13px;
    left: 10px;
    background: var(--cinza-1);
  }

  input {
    height: 40px;
    border-radius: 8px;
    border: solid 1px var(--cinza-2);
    margin-top: 20px;
  }

  h1 {
    font-weight: 600;
  }

  h2 {
    font-size: 13px;
  }

  .button {
    display: block;
    margin: 0px auto 16px;
    height: 50px;
    width: 100%;
    margin-bottom: 16px;
    border: none;
    background: var(--cor-principal);
    color: var(--cinza-1);
    border-radius: 8px;
    margin-top: 10px;
  }

  a {
    margin-bottom: 10px;
    text-decoration: none;
    color: var(--cinza-4);
    font-size: 14px;
    font-weight: 600;
  }

  span {
    font-size: 15px;
    color: var(--toastify-icon-color-error);
  }
`;

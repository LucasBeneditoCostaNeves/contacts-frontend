import styled from "styled-components";

export const ProfileStyled = styled.div`
  .foto {
    width: 50px;
    height: 48px;
    border-radius: 12px;
  }

  h1 {
    color: var(--cinza-1);
    margin-left: 10px;
    font-size: 23px;
    font-weight: 600;
  }

  header {
    display: flex;
    background-color: var(--cinza-4);
    justify-content: space-between;
    padding: 4px 0px;
    box-shadow: 0px 3px 2px #202020;
  }

  .logout {
    width: 50px;
    height: 50px;
  }

  .infoUser {
    display: flex;
    align-items: center;
    margin-left: 25px;
  }

  .divContact {
    display: flex;
    justify-content: space-between;
    margin: 25px 25px;
  }

  h2 {
    width: 196px;
    height: 55px;
    background: var(--cinza-4);
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--cinza-1);
    box-shadow: 0px 3px 0px #202020;
    border-radius: 16px;
    font-weight: 600;
  }

  .buttonAdd {
    width: 50px;
    height: 50px;
    background: var(--cinza-4);
    font-size: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--cinza-1);
    box-shadow: 0px 3px 0px #202020;
    border-radius: 16px;
    font-weight: 600;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
  }

  li {
    margin: 0px 40px 40px 0px;
    color: white;
    box-shadow: rgb(32, 32, 32) -7px 8px 0px;
    background: var(--cinza-4);
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  li > h4 {
    margin: 7px 0px;
  }

  .zero {
    margin: 0 auto;
    display: flex;
    font-size: 32px;
    background: var(--cinza-4);
    padding: 22px;
    border-radius: 8px;
    box-shadow: rgb(32, 32, 32) -8px 8px 0px;
  }
`;

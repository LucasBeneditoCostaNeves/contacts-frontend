import styled from "styled-components";

export const CardStyled = styled.li`
  width: 200px;
  padding: 16px 20px;
  background: red;
  border-radius: 8px;

  div {
    width: 44px;
    display: flex;
    justify-content: space-between;
    margin: 5px auto 0px;
  }

  .trash {
    width: 20px;
    height: 20px;
  }

  .pencil {
    width: 20px;
    height: 20px;
  }
`;

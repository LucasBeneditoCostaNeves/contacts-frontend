import { useContext } from "react";
import { ModalStyled } from "./styled";
import { CreateContext } from "../../context/context";

export const ModalRemove = () => {
  const { modalRemove, setModalRemove, deleteContact } =
    useContext(CreateContext);

  return (
    <ModalStyled>
      <div className="white">
        <h1>Deseja Realmente apagar?</h1>
        <div>
          <button
            onClick={() => {
              deleteContact();
              setModalRemove(false);
            }}
            className="yes"
          >
            ✅
          </button>
          <button onClick={() => setModalRemove(false)} className="no">
            ❌
          </button>
        </div>
      </div>
    </ModalStyled>
  );
};

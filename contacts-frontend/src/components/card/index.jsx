import { CardStyled } from "./styled";
import pencil from "../../assets/pencil3.png";
import trash from "../../assets/trash2.png";
import { useContext } from "react";
import { CreateContext } from "../../context/context";
import { json } from "react-router-dom";

export function Card(data) {
  const { deleteContact, setModalRemove, setModalUpdated, setDataUserPatch } =
    useContext(CreateContext);
  return (
    <CardStyled>
      <h3>{data && data.name}</h3>
      <h4>{data && data.email}</h4>
      <h5>{data && data.telephone}</h5>
      <div>
        <img
          onClick={() => {
            setModalUpdated(true);
            localStorage.setItem("IdUser", data.id);
            setDataUserPatch(data);
          }}
          className="pencil"
          src={pencil}
          alt=""
          srcset=""
        />
        <img
          onClick={() => {
            setModalRemove(true);
            localStorage.setItem("IdUser", data.id);
          }}
          className="trash"
          src={trash}
          alt=""
        />
      </div>
    </CardStyled>
  );
}

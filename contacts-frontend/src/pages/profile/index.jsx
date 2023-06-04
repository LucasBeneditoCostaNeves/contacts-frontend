import { useContext, useEffect, useState } from "react";
import { ProfileStyled } from "./styled";
import { CreateContext } from "../../context/context";
import img from "../../assets/profile.png";
import img2 from "../../assets/image 4@3x.png";
import { List } from "../../components/list";
import { ModalAdd } from "../../components/modalAdd";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ModalRemove } from "../../components/modalRemove";
import { ModalUpdated } from "../../components/modalUpdated";

export function PageProfile() {
  const {
    capturingDataUser,
    dataUser,
    capturingContacts,
    modalAdd,
    setModalAdd,
    modalRemove,
    modalUpdated,
    setLoading,
  } = useContext(CreateContext);
  useEffect(() => {
    capturingDataUser();
    capturingContacts();
  }, []);

  const navigate = useNavigate();

  return (
    <ProfileStyled>
      <header>
        <div className="infoUser">
          <img src={img} className="foto" alt="" />
          {dataUser && <h1>{dataUser.name}</h1>}
        </div>
        <img
          src={img2}
          className="logout"
          alt=""
          onClick={() => {
            localStorage.removeItem("@Token");
            setLoading(false);
            navigate("/");
          }}
        />
      </header>
      <div className="divContact">
        <h2>Contatos:</h2>
        <button className="buttonAdd" onClick={() => setModalAdd(true)}>
          +
        </button>
      </div>
      <List></List>
      {modalAdd && <ModalAdd />}
      {modalRemove && <ModalRemove />}
      {modalUpdated && <ModalUpdated />}
      <ToastContainer autoClose={1400} />
    </ProfileStyled>
  );
}

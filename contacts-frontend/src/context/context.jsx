//Importanto createContext e useState, já vem com o react
import { createContext, useState } from "react";
import { api } from "../services";
import { toast } from "react-toastify";

//Criando nosso contexto
export const CreateContext = createContext({});

export const Provider = ({ children }) => {
  const [dataUser, setDataUser] = useState({});
  const [contacts, setContacts] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [modalUpdated, setModalUpdated] = useState(false);
  const [dataUserPatch, setDataUserPatch] = useState({});

  async function capturingDataUser() {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get("users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDataUser(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  async function capturingContacts() {
    const token = localStorage.getItem("@Token");
    try {
      const response = await api.get("contacts/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
      setLoading(true);
    } catch {}
  }

  async function addContact(data) {
    const token = localStorage.getItem("@Token");
    const newData = {
      email: data.email,
      name: data.name,
      telephone: Number(data.telephone),
    };
    try {
      await api.post("contacts/", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      capturingContacts();
      setModalAdd(false);
      toast.success("😎Contato adicionado chefia!");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Opa, esse contato já existe!");
      }
    }
  }

  async function updatedContact(data) {
    const token = localStorage.getItem("@Token");
    const idUser = localStorage.getItem("IdUser");
    const newData = {
      email: data.email ? data.email : dataUserPatch.email,
      name: data.name ? data.name : dataUserPatch.name,
      telephone: data.telephone
        ? Number(data.telephone)
        : Number(dataUserPatch.telephone),
    };
    try {
      await api.patch(`contacts/${idUser}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      capturingContacts();
      setModalUpdated(false);
      toast.success("😎Contato atualizado!");
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Opa, esse contato já existe!");
      }
    }
  }

  async function deleteContact() {
    const idUser = localStorage.getItem("IdUser");
    const token = localStorage.getItem("@Token");
    try {
      await api.delete(`contacts/${idUser}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await capturingContacts();
      toast.success("Usuário deletado meu chapa");
    } catch {}
  }

  return (
    <CreateContext.Provider
      value={{
        capturingDataUser,
        dataUser,
        capturingContacts,
        contacts,
        loading,
        modalAdd,
        setModalAdd,
        addContact,
        deleteContact,
        modalRemove,
        setModalRemove,
        modalUpdated,
        setModalUpdated,
        updatedContact,
        setLoading,
        dataUserPatch,
        setDataUserPatch,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
};

import { useContext } from "react";
import { CreateContext } from "../../context/context";
import { ModalStyled } from "./styled";
import { Input } from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../pages/register";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const ModalAdd = () => {
  const { setModalAdd, addContact } = useContext(CreateContext);
  const addContactSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "Mínimo 3 caracteres")
      .max(30, "Máximo 30 caracteres"),
    email: yup
      .string()
      .required("Email obrigatório")
      .email("O email inválido")
      .min(6, "Mínimo 6 caracteres")
      .max(100, "Máximo 120 caracteres"),
    telephone: yup
      .string("Precisa ser um número")
      .required("Telefone obrigatório")
      .min(6, "Minímo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(addContactSchema),
  });

  return (
    <ModalStyled>
      <div className="white">
        <header>
          <h3>Adicionar Usuário</h3>
          <button className="exit" onClick={() => setModalAdd(false)}>
            X
          </button>
        </header>
        <form onSubmit={handleSubmit(addContact)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Coloque seu nome aqui"
            register={register("name")}
            msgerror={errors.name?.message}
          />
          <Input
            label="Email"
            type="text"
            placeholder="Coloque seu email aqui"
            register={register("email")}
            msgerror={errors.email?.message}
          />
          <Input
            label="Telefone"
            type="text"
            placeholder="Coloque seu telefone aqui"
            register={register("telephone")}
            msgerror={errors.telephone?.message}
          />
          <button className="buttonConfirme" type="submit">
            Adicionar
          </button>
        </form>
      </div>
    </ModalStyled>
  );
};

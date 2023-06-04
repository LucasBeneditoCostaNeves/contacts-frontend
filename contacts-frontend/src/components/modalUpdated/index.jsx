import { useContext } from "react";
import { CreateContext } from "../../context/context";
import { ModalStyled } from "./styled";
import { Input } from "../input";
import { useForm } from "react-hook-form";

export const ModalUpdated = () => {
  const { setModalUpdated, updatedContact } = useContext(CreateContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    // resolver: yupResolver(addContactSchema),
  });

  return (
    <ModalStyled>
      <div className="white">
        <header>
          <h3>Adicionar Usuário</h3>
          <button className="exit" onClick={() => setModalUpdated(false)}>
            X
          </button>
        </header>
        <form onSubmit={handleSubmit(updatedContact)}>
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

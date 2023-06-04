import React from "react";

export const Input = ({ label, type, placeholder, register, msgerror }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} {...register} />
      <span>{msgerror}</span>
    </div>
  );
};

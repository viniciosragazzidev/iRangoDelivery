"use client";
import React, { ReactNode, useState } from "react";
import SendContent from "./SendContent";
import { useDispatch } from "react-redux";
import { setCategory } from "@/app/redux/categorySlice";

const ModalAdd = ({ children, data }: { children: ReactNode; data: any }) => {
  const [open, setOpen] = useState(false);
  const [itens, setItens] = useState([]);
  const dispatch = useDispatch();

  const renderForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Obtém os dados do formulário
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject: any = {};

    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    // Atualiza o estado 'itens' com os dados do formulário
    setItens(formDataObject);
    dispatch(setCategory(formDataObject));

    console.log(formDataObject);
  };
  return (
    <>
      <button
        onClick={() => {
          setOpen((state) => !state);
        }}
        className="text-white bg-red-500 text-xs font-semibold px-4 py-2   rounded-lg"
      >
        Adicionar
      </button>
      <div
        className={`w-full  h-full fixed top-0 left-0 flex items-center justify-center bg-[#f1f5f957] ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`bg-red-500 w-full max-w-xs h-full max-h-[70%] rounded-lg relative p-3 text-slate-100 ${
            open && "animationX"
          }`}
        >
          <span
            className="text-2xl absolute top-0 right-0 m-3 cursor-pointer text-white"
            onClick={() => {
              setOpen((state) => !state);
            }}
          >
            X
          </span>{" "}
          <form onSubmit={renderForm}>
            {Object.keys(data[0]).map((key) => (
              <>
                {key !== "id" && (
                  <div className="formArea" key={key}>
                    <label htmlFor="">{key.toUpperCase()}</label>
                    <input type="text" name={key} />{" "}
                    {/* Use 'name' atributo para identificar os campos */}
                  </div>
                )}
              </>
            ))}
            <button type="submit">Enviar</button>
          </form>
          {children}
        </div>
      </div>
    </>
  );
};

export default ModalAdd;

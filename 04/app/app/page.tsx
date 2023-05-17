"use client";
import React from "react";
import useAdviceApi from "./api";

function Advice() {
  const { advice, isLoading, error } = useAdviceApi();

  if (error) {
    return <div>Error al cargar el consejo: {error}</div>;
  }

  if (isLoading || !advice) {
    return (
      <div className="flex item h-screen text-center  justify-center">
        Cargando consejo...
      </div>
    );
  }

  return (
    <div className="flex bg-gray-900 justify-center items-center h-screen">
      <div>

      <div className="flex flex-col p-5 py-9 text-center bg-slate-700 w-96 rounded-xl">
        <h2 className="text-green-400 text-xs text-center justify-center font-semibold uppercase tracking-[0.2em]">
          Advice # {advice.id}
        </h2>
        <p className="flex text-green-100 text-center justify-center mx-auto w-72 py-5">
          “{advice.advice}”
        </p>
        <img  src="/1.svg" alt="" />
      </div>
      <div className="flex justify-center items-center">
      <div className='relative bottom-5 rounded-full bg-green-700 hover:bg-green-300 p-2'>
        <img  src="./2.svg" alt="button" />
      </div>
      </div>
      </div>
    </div>
  );
}

export default Advice;

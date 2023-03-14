import { type NextPage } from "next";
import Head from "next/head";


export default function Home (){

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center relative ">
      <div className="text-2xl text-center">Which Pokemon is rounder?</div>
      <div className="border rounded p-8 mt-2 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-200"/>
          <div className="p-8">vs</div>
        <div className="w-16 h-16 bg-red-200"/>
      </div>
    </div>
  );
};
